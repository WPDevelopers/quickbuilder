import React, { useEffect, useRef } from "react";
import { isEmptyObj, isFunction, isObject } from "../utils";
import { useBuilderContext, useDefaults } from "./index";

const withProps = (WrappedComponent, isGeneric = false) => {
    const WithProps = (props) => {
        const builderContext = useBuilderContext();
        const { trigger } = props;

        let field: any = builderContext.getFieldProps(props);
        const meta = builderContext.getFieldMeta(field.name, props);
        const helpers = builderContext.getFieldHelpers();

        if (props.name === 'import_elementor_theme_next') {
            console.log("import_elementor_theme_next", props);
        }

        if (builderContext?.quickBuilder && builderContext?.show) {
            if (!builderContext.show.includes(props.name)) {
                // console.log('WithProps', props, builderContext);
                field.classes = field?.classes ? field.classes + ' hidden' : ' hidden';
            }
        }

        let pIndex = props?.parentIndex ? [...props.parentIndex] : []
        field.parentIndex = pIndex;
        field.context = builderContext;

        if (isFunction(props.onChange)) {
            field.onChange = props.onChange;
        }
        if (isFunction(props.onBlur)) {
            field.onBlur = props.onBlur;
        }

        const isFieldMounted = useRef({});

        useEffect(() => {
            isFieldMounted.current[props.name] = true;
            return () => {
                isFieldMounted.current[props.name] = false;
            }
        }, [])

        // if (props?.parent === 'notification-template' && props?.ajax) {
        //     console.log(props.name, props);
        // }

        useEffect(() => {
            if (meta.visible && isFieldMounted.current[props.name]) {
                // Not needed / Confused
                if (!isGeneric && field.type !== 'group') {
                    helpers.setValue(field.name, field.value)
                } else {
                    let parent = props?.parent;
                    let parenttype = props?.parenttype;
                    if (parent && parenttype === 'group' && field.value) {
                        helpers.setValue([parent, field.name], field.value)
                    }
                    // if (parent && parenttype === 'repeater') {
                    //     // let parentValues = helpers.getValue(parent) || [];
                    //     // if (isArray(parentValues) && parentValues.length > 0) {
                    //     //     parentValues[props.index][field.name] = field.value;
                    //     //     helpers.setValue(parent, parentValues)
                    //     // } else {
                    //     //     parentValues = [...parentValues,];
                    //     //     parentValues = { ...parentValues, [field.name]: field.value };
                    //     //     helpers.setValue(parent, parentValues)
                    //     // }
                    // }
                }
            }
        }, [meta.visible])

        useEffect(() => {
            if (isFieldMounted.current[props.name]) {
                if (isObject(trigger) && !isEmptyObj(trigger)) {
                    useDefaults(field.name, helpers, field.value, trigger);
                }
            }
        }, [field.value, meta.visible])


        if (!meta.visible) {
            return <></>;
        }

        return <WrappedComponent {...field} />;
    }
    return WithProps;
};

export default withProps;