import { clone, toPath } from "lodash-es";
import { wpFetch } from "./functions";
import when from "./when";

export const isString = (args) => {
    return args !== null && typeof args === "string";
};

export const isNumber = (args) => {
    return args !== null && typeof args === "number";
};

var isInteger = function isInteger(obj) {
    return String(Math.floor(Number(obj))) === obj;
};

export const isFunction = ( functionName ) => {
    return functionName !== null && typeof functionName === "function";
};

export const isArray = (args) => {
    return args !== null && typeof args === "object" && Array.isArray(args);
};

export const isObject = (obj) => {
    return obj !== null && typeof obj === 'object' && !isArray(obj)
}

export const isVisible = (values, props) => {
    if (!props?.rules || props.name == undefined) {
        return true;
    }

    let whenVar = when(props.rules, values);
    return Boolean(whenVar);
}

export const withState = (type) => {
    return Boolean( ["group", "section"].includes(type) )
}

export const isEmptyObj = (obj) => {
	for (let k in obj) {
		if (obj.hasOwnProperty(k)) {
			return false;
		}
	}
	return true;
};

export const getIn = (obj, key, def?, p?) => {
    if (p === void 0) {
        p = 0;
    }
    const path = toPath(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
}

export const sortingFields = ( fields ) => [].concat(fields).sort(function (a, b) {
	if (a.priority == undefined || b.priority == undefined) return 0;
	return a.priority > b.priority ? 1 : -1;
});

export const getSelectedValues = (options: []) => {
    return Array.from(options).filter(function (el: any) {
        return el.selected;
    }).map(function (el: any) {
        return el.value;
    });
}

export const executeChange = (eventOrTextValue, maybePath?) =>  {
        var field = maybePath;
        var val = eventOrTextValue;
        var parsed;

        if (!isString(eventOrTextValue)) {
            if (eventOrTextValue.persist) {
                eventOrTextValue.persist();
            }

            const target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;

            const type = target.type,
                name = target.name,
                value = target.value,
                checked = target.checked,
                options = target.options,
                multiple = target.multiple;


            field = maybePath ? maybePath : name;

            switch( type ) {
                case 'number':
                case 'range':
                    parsed = parseFloat(value), isNaN(parsed) ? '' : parsed;
                    val = parsed;
                    break;
                case 'checkbox':
                case 'toggle':
                    val = !!multiple ? value : checked;
                    break;
            }

            // console.log(field, val);


            // if( /number|range/.test(type) ) {
            //     parsed = parseFloat(value), isNaN(parsed) ? '' : parsed;
            //     val = parsed;
            // } else if(/checkbox/.test(type)){
            //     val = (checked || value);
            // } else {
            //     if( !!multiple ) {
            //         val
            //     }
            // }

            // val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) ? (checked || value) : !!multiple ? value : value;
        }

    return { field, val };
}

export const objectWithoutPropertiesLoose = (source, excluded) => {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

export const setIn = (obj, path, value) => {
    var res = clone(obj); // this keeps inheritance when obj is a class

    var resVal = res;
    var i = 0;
    var pathArray = toPath(path);

    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));

        if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = clone(currentObj);
        } else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    } // Return original object if new value is the same as current


    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }

    if (value === undefined) {
        delete resVal[pathArray[i]];
    } else {
        resVal[pathArray[i]] = value;
    } // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


    if (i === 0 && value === undefined) {
        delete res[pathArray[i]];
    }

    return res;
}

export const validFieldProps = ( defaultProps, exclude = [] ) => {
    const type = defaultProps.type;
    let filterOutArray = [ 'validation_rules', 'default', 'rules', 'meta', 'switch', ...exclude ];
    if( type !== 'select' && type !== 'radio-card' && ( type !== 'toggle' && defaultProps.multiple ) ) {
        filterOutArray.push( 'options' );
    }
    if( type !== 'group' && type !== 'repeater' && type !== 'section' && type !== 'button' ) {
        filterOutArray.push( 'fields' );
    }

    let validProps: any = objectWithoutPropertiesLoose( defaultProps, filterOutArray );
    if( defaultProps?.label && ! defaultProps?.placeholder ) {
        validProps.placeholder = defaultProps.label;
    }
    return validProps;
}

export const hitAAJX = ( ajax, context = null ) => {
    if( context !== null && ajax ) {
        let isEligible = true;
        if( ajax?.rules ) {
            isEligible = when(ajax?.rules, context.values);
        }
        if( isEligible ) {
            let data = {}
            Object.keys(ajax.data).map(singleData => {
                if (ajax.data[singleData].indexOf('@') > -1) {
                    let eligibleKey = ajax.data[singleData].substr(1);
                    data[singleData] = context.values?.[eligibleKey]
                } else {
                    data[singleData] = ajax.data[singleData]
                }
            })
            return wpFetch({
                path: ajax.api,
                data
            }).then( (response: any) => {
                if (response?.status == "success" && response?.redirect) {
                    window.location = response?.redirect;
                }

                if (response?.data?.context && isObject(response?.data?.context)) {
                    Object.keys(response.data.context).map((eligibleKey) => {
                        context.setFieldValue(eligibleKey, response.data.context[eligibleKey]);
                    });
                }

                if( ajax?.trigger && isString(ajax?.trigger) ) {
                    let at = ajax.trigger.indexOf('@');
                    let colon = ajax.trigger.indexOf(":");
                    if (at === 0 && colon > 0) {
                        let eligibleKey = ajax.trigger.substr(1, colon - 1);
                        let eligibleDataToSet = ajax.trigger.substr(colon + 1);
                        if (eligibleDataToSet == 'true'){
                            eligibleDataToSet = true;
                        }
                        else if (eligibleDataToSet == 'false'){
                            eligibleDataToSet = false;
                        }

                        context.setFieldValue(
                            eligibleKey,
                            eligibleDataToSet
                        );
                    }
                }
                return response;
            })
        }
    }
    return Promise.reject( false );
}