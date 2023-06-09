import { useEffect, useReducer, useRef, useCallback, useLayoutEffect } from "react";
import { builderReducer, when } from '../index'
import { getIn, executeChange as eChange, isVisible, isArray, validFieldProps, isString, getTime, sortingFields } from "../utils";
import { doAction } from '@wordpress/hooks'

const useBuilder = (props) => {
	// Set is Mounted or NOT
	const isMounted = useRef(false);
	useEffect(() => {
		isMounted.current = true;
		return () => { isMounted.current = false };
	}, [])

	const [state, dispatch] = useReducer(builderReducer, {
		...props,
		savedValues: props.savedValues || {},
		values: props.values || {},
		errors: props.initialErrors || {},
		touched: props.initialTouched || {},
		icons: props.initialIcons || {},
		common: {},
		alerts: {},
		tabs: sortingFields(props.tabs)
	});

	const setContext = useEventCallback((field, value, shouldValidate) => {
		dispatch({
			type: 'SET_CONTEXT',
			payload: {
				field: field,
				value: value
			}
		});
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
	});

	const setFormField = useEventCallback((field, value) => {
		dispatch({
			type: 'SET_FORM_FIELD',
			payload: {
				field: field,
				value: value
			}
		});
	});

	const getFieldValue = useCallback((name) => {
		return getIn(state.values, name);
	}, [state]);

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

	const executeBlur = useCallback((event, path = false) => {
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

	const executeChange = useCallback((eventOrTextValue, maybePath?, validProps?) => {
		if (validProps?.isPro && Boolean(state.is_pro_active) === false) {
			return;
		}
		const { field, val: value } = eChange(eventOrTextValue, maybePath);
		if (field) {
			setFieldValue(field, value);
			doAction( 'quickBuilder_setFieldValue', field, value, validProps )
		}
	}, [setFieldValue, state.values]);

	const handleChange = useEventCallback((eventOrString, validProps) => {
		if (validProps?.isPro && Boolean(state.is_pro_active) === false) {
			state.alerts?.pro_alert(validProps?.popup)?.fire();
			// return false;
		}

		if (typeof eventOrString === 'string') {
			return (event) => executeChange(eventOrString, event, validProps);
		} else {
			executeChange(eventOrString, null, validProps);
		}
	});

	const getFieldProps = useCallback((args) => {
		let defaultProps = { ...args };
		let validProps: any = validFieldProps(defaultProps);
		const name = validProps.name;
		const type = validProps.type;
		const parent = validProps.parent;
		const parentType = validProps.parenttype;
		let valueState: any;
		// For Badge Is Commented.
		if (defaultProps?.is_pro) {
			validProps.is_pro = !(defaultProps?.is_pro && Boolean(state.is_pro_active) === true);
		}

		if (parent && parentType === 'group') {
			let parentValue = getIn(state.values, parent) ?? {};
			valueState = parentValue?.[name] ?? defaultProps?.default
		} else if (parent && parentType === 'repeater') {
			let parentValue = getIn(state.values, parent) ?? [];
			valueState = parentValue?.[validProps.index]?.[name] ?? defaultProps?.default
		} else {
			valueState = getIn(state.values, name) ?? defaultProps?.default
		}

		validProps.onChange = handleChange;
		validProps.onBlur = handleBlur;

		let valueProp = validProps.value;
		if (type === 'checkbox' && !validProps.multiple) {
			validProps.checked = !!valueState;
			validProps.value = !!valueState;
			if (isString(valueState) && valueState === "0") {
				validProps.checked = false;
				validProps.value = false;
			} else {
				validProps.checked = Boolean(valueState);
				validProps.value = Boolean(valueState);
			}
		} else if (type === 'radio') {
			validProps.checked = valueState === valueProp;
			validProps.value = valueProp;
		} else if (type === 'date') {
			validProps.value = valueState == undefined ? getTime() : valueState;
		} else {
			validProps.value = valueState;
		}

		validProps.visible = isVisible(state.values, args);
		//=== "notification-template"
		// if (validProps?.parenttype === 'group') {
		//     // if ("custom_fifth_param" === name) {
		//     let currentIndex = validProps.parentIndex;
		//     let parentIndex = validProps.parentIndex;
		//     const lastIndex = parentIndex.pop() - 1;
		//     parentIndex = [...parentIndex, lastIndex];
		//     const parentField = getIn(state.tabs, parentIndex);
		//     const parentVisibility = isVisible(state.values, getFieldProps(parentField));
		//     console.log("validProps", validProps.name, parentVisibility);
		//     // }
		// }

		return validProps;
	}, [handleBlur, handleChange, state.values]);

	const getFieldMeta = useCallback((name, props, parent = null) => {
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

	const eligibleOptions = useCallback((options) => {
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

	const eligibleOption = useCallback((options, value, multiple = false) => {
		if (options.length) {
			let newOptions = [];
			if (multiple && isArray(value)) {
				newOptions = options.filter((option) =>
					value.includes(option.value)
				);
				return newOptions;
			} else {
				newOptions = options.filter((option) => option.value == value);
				return newOptions.length > 0 ? newOptions[0] : '';
			}
		}
		return options;
	}, [state.errors, state.touched, state.values]);

	const getFieldHelpers = useCallback(() => {
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
	}, [state.errors, state.touched, state.values, state.savedValues]);

	const getTabFields = useCallback((parentIndex) => {
		return getIn(state.tabs, parentIndex);
	}, [state]);

	const setSubmitting = useEventCallback((submit) => {
		dispatch({
			type: 'SET_ISSUBMITTING',
			payload: submit
		});
	});

	const setActiveTab = useEventCallback((tab) => {
		dispatch({
			type: 'SET_ACTIVE_TAB',
			payload: tab
		});
	});

	const setRedirect = useEventCallback((redirectData) => {
		dispatch({
			type: 'SET_REDIRECT',
			payload: redirectData
		});
	});

	const registerIcons = useEventCallback((name, iconLists) => {
		dispatch({
			type: 'SET_ICONS',
			payload: {
				name,
				icons: iconLists
			}
		});
	});

	const registerCommon = useEventCallback((name, value) => {
		dispatch({
			type: 'SET_COMMONS',
			payload: {
				name,
				value
			}
		});
	});
	const registerAlert = useEventCallback((name, value) => {
		dispatch({
			type: 'SET_ALERTS',
			payload: {
				name,
				value
			}
		});
	});

	interface BuilderContext {
		[field: string]: any
	}

	let context: BuilderContext = {
		...props,
		...state,
		setContext: setContext,
		values: state.values,
		savedValues: state.savedValues,
		errors: state.errors,
		touched: state.touched,
		isSubmitting: false,
		setActiveTab: setActiveTab,
		setRedirect: setRedirect,
		setSubmitting: setSubmitting,
		setValues: setValues,
		setSavedValues: setSavedValues,
		setFieldValue: setFieldValue,
		getFieldValue: getFieldValue,
		handleBlur: handleBlur,
		handleChange: handleChange,
		getFieldProps: getFieldProps,
		getFieldMeta: getFieldMeta,
		getFieldHelpers: getFieldHelpers,
		eligibleOptions: eligibleOptions,
		eligibleOption: eligibleOption,
		getTabFields: getTabFields,

		setFormField: setFormField,

		registerIcons: registerIcons,
		registerCommon: registerCommon,
		registerAlert: registerAlert,
	};

	return context;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? useLayoutEffect : useEffect;

const useEventCallback = (fn) => {
	var ref = useRef(fn);
	useIsomorphicLayoutEffect(function () {
		ref.current = fn;
	});
	return useCallback(function (...args) {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}
		return ref.current.apply(void 0, args);
	}, []);
}

export default useBuilder;
