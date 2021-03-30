import React, { useEffect, useReducer, useRef } from "react";
import { builderReducer } from '../BuilderReducers'
import { getIn, isObject, executeChange as eChange, isVisible, withState, isArray, objectWithoutPropertiesLoose, validFieldProps } from "../utils";
import when from "../when";

const useBuilder = (props) => {
    // Set is Mounted or NOT
    const isMounted = useRef(null);
    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false };
    }, [])

    const [state, dispatch] = useReducer(builderReducer, {
        savedValues: props.savedValues || {},
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

    const setSavedValues = useEventCallback((values, shouldValidate) => {
        var resolvedValues = typeof values === 'function' ? values(state.values) : values;
        dispatch({
            type: 'SET_SAVED_VALUES',
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
        console.log(eventOrString, typeof eventOrString);

        if (typeof eventOrString === 'string') {
            return (event) => executeChange(eventOrString, event);
        } else {
            executeChange(eventOrString);
        }
    });

    const getFieldProps = React.useCallback((args) => {
        let defaultProps = { ...args };
        let validProps: any = validFieldProps(defaultProps);
        const name = validProps.name;
        const type = validProps.type;
        const valueState = getIn(state.values, name) || defaultProps?.default;

        if (['group', 'repeater'].includes(type)) {

        }

        validProps.onChange = handleChange;
        validProps.onBlur = handleBlur;

        let valueProp = validProps.value;
        if (type === 'checkbox') {
            validProps.checked = !!valueState;
            validProps.value = !!valueState;
        } else if (type === 'radio') {
            validProps.checked = valueState === valueProp;
            validProps.value = valueProp;
        } else {
            validProps.value = valueState;
        }
        return validProps;
    }, [handleBlur, handleChange, state.values]);

    const getFieldMeta = React.useCallback((name, props, parent = null) => {
        var parentValue,
            value;

        if (parent !== null) {
            parentValue = getIn(state.values, parent);
            value = parentValue?.[name];
        } else {
            value = getIn(state.values, name) || props.meta?.default;
        }

        return {
            ...props.meta,
            value: value,
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
            if (multiple && isArray(value)) {
                newOptions = options.filter((option) =>
                    value.includes(option.value)
                );
                return newOptions;
            } else {
                newOptions = options.filter((option) => option.value === value);
                return newOptions.length > 0 ? newOptions[0] : '';
            }
        }
        return options;
    }, [state.errors, state.touched, state.values]);

    const getFieldHelpers = React.useCallback(() => {
        return {
            setValue: (name, value) => setFieldValue(name, value),
            getValue: (name) => getIn(state.values, name),
            getValueForDefault: (name, comparisonKey = null) => {
                if (comparisonKey === null) {
                    return getIn(state.savedValues, name);
                }

                let savedValue = getIn(state.savedValues, comparisonKey),
                    currentValue = getIn(state.values, comparisonKey);
                return savedValue === currentValue ? getIn(state.savedValues, name) : false;
            },
        };
    }, [state.errors, state.touched, state.values]);

    const setSubmitting = useEventCallback((submit) => {
        dispatch({
            type: 'SET_ISSUBMITTING',
            payload: submit
        });
    });

    let context = {
        ...props,
        values: state.values,
        savedValues: state.savedValues,
        errors: {},
        touched: {},
        isSubmitting: false,
        setSubmitting: setSubmitting,
        setValues: setValues,
        setSavedValues: setSavedValues,
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