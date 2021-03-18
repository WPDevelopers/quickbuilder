import React, { useEffect, useReducer, useRef } from "react";
import { builderReducer } from '../BuilderReducers'
import { getIn, isObject, executeChange as eChange, isVisible, withState } from "../utils";
import when from "../when";

const useBuilder = (props) => {
    // Set is Mounted or NOT
    const isMounted = useRef(null);
    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false };
    }, [])

    const [state, dispatch] = useReducer(builderReducer, {
        values: props.initialValues || {},
        errors: props.initialErrors || {},
        touched: props.initialTouched || {},
    });

    const setValues = useEventCallback((values, shouldValidate) => {
        var resolvedValues = typeof values === 'function' ? values(state.values) : values;
        dispatch({
            type: 'SET_VALUES',
            payload: resolvedValues
        });
        var willValidate = shouldValidate === undefined ? false : shouldValidate;
        return willValidate ? resolvedValues : Promise.resolve();
    });

    const setFieldValue = useEventCallback((field, value, shouldValidate) => {
        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field: field,
                value: value
            }
        });
        // var willValidate = shouldValidate === undefined ? true : shouldValidate;
        // return willValidate ? value : Promise.resolve();
    });

    const setFieldTouched = useEventCallback((field, touched, shouldValidate) => {
        if (!touched) {
            touched = true;
        }

        dispatch({
            type: 'SET_FIELD_TOUCHED',
            payload: {
                field: field,
                value: touched
            }
        });
        // var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
        // return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
    });

    const executeBlur = React.useCallback((event, path = false) => {
        if (event.persist) {
            event.persist();
        }

        var _e$target = event.target,
            name = _e$target.name,
            id = _e$target.id,
            outerHTML = _e$target.outerHTML;
        let field = path ? path : name ? name : id;
        setFieldTouched(field, true);
    }, [setFieldTouched]);

    const handleBlur = useEventCallback((eventOrString) => {

        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeBlur(event, eventOrString);
            };
        } else {
            executeBlur(eventOrString);
        }
    });

    const executeChange = React.useCallback((eventOrTextValue, maybePath?) => {
        const { field, val: value } = eChange(eventOrTextValue, maybePath);
        if (field) {
            setFieldValue(field, value);
        }
    }, [setFieldValue, state.values]);

    const handleChange = useEventCallback((eventOrString) => {
        if (typeof eventOrString === 'string') {
            return function (event) {
                return executeChange(event, eventOrString);
            };
        } else {
            executeChange(eventOrString);
        }
    });

    const getFieldProps = React.useCallback((args) => {
        const isAnObject = isObject(args);
        const name = isAnObject ? args.name : args;
        const valueState = getIn(state.values, name);

        if (isAnObject) {
            delete args.meta;
            delete args.helpers;
        }

        let field: any = {
            ...args,
            type: args.type,
            name: name,
            value: valueState || '',
            onChange: handleChange,
            onBlur: handleBlur,
            id: name,
        };

        if (args?.id) {
            field.id = args.id;
        }

        if (isAnObject) {
            var type = args.type,
                valueProp = args.value,
                is = args.as,
                multiple = args.multiple;

            if (type === 'checkbox') {
                if (valueProp === undefined) {
                    field.checked = !!valueState;
                } else {
                    field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
                    field.value = valueProp;
                }
            } else if (type === 'radio') {
                field.checked = valueState === valueProp;
                field.value = valueProp;
            } else if (is === 'select' && multiple) {
                field.value = field.value || [];
                field.multiple = true;
            }
        }

        // if (name === 'toggle') {
        //     console.log(field)
        // }

        return field;
    }, [handleBlur, handleChange, state.values]);

    const getFieldMeta = React.useCallback((name, props) => {
        return {
            ...props.meta,
            value: getIn(state.values, name),
            error: getIn(state.errors, name),
            touched: !!getIn(state.touched, name),
            visible: isVisible(state.values, props),
            initialValue: '', // getIn(initialValues.current, name),
            initialTouched: "", // !!getIn(initialTouched.current, name),
            initialError: "", // getIn(initialErrors.current, name)
        };
    }, [state.errors, state.touched, state.values]);

    const eligibleOptions = React.useCallback((options) => {
        if (options.length > 0) {
            let newOptions = [];
            newOptions = options.filter((item) => {
                if (item?.rules) {
                    return when(item.rules, state.values);
                } else {
                    return item;
                }
            });
            return newOptions;
        }
        return options;
    }, [state.errors, state.touched, state.values]);

    const eligibleOption = React.useCallback((options, value, multiple = false) => {
        if (options.length) {
            let newOptions = [];
            if (multiple) {
                newOptions = options.filter((option) =>
                    value.includes(option.value)
                );
                return newOptions;
            } else {
                newOptions = options.filter((option) => option.value === value);
                return newOptions?.[0] ?? '';
            }
        }
        return options;
    }, [state.errors, state.touched, state.values]);

    const getFieldHelpers = React.useCallback((props) => {
        return {
            setValue: (name, value) => setFieldValue(name, value)
        };
    }, [state.errors, state.touched, state.values]);

    let context = {
        values: state.values,
        errors: {},
        touched: {},
        isSubmitting: false,
        setValues: setValues,
        setFieldValue: setFieldValue,
        handleBlur: handleBlur,
        handleChange: handleChange,
        getFieldProps: getFieldProps,
        getFieldMeta: getFieldMeta,
        getFieldHelpers: getFieldHelpers,
        eligibleOptions: eligibleOptions,
        eligibleOption: eligibleOption,
    };

    return context;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const useEventCallback = (fn) => {
    var ref = React.useRef(fn);
    useIsomorphicLayoutEffect(function () {
        ref.current = fn;
    });
    return React.useCallback(function (...args) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}

export default useBuilder;