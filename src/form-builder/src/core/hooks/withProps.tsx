import React, { useEffect } from "react";
import { isArray, isEmptyObj, isFunction, isObject } from "../utils";
import { useBuilderContext, useDefaults } from "./index";

const withProps = (WrappedComponent, isGeneric = false) => {
    const WithProps = (props) => {
        const builderContext = useBuilderContext();
        const { trigger } = props;

        let field: any = builderContext.getFieldProps(props);
        const meta = builderContext.getFieldMeta(field.name, props);
        const helpers = builderContext.getFieldHelpers();

        if (isFunction(props.onChange)) {
            field.onChange = props.onChange;
        }
        if (isFunction(props.onBlur)) {
            field.onBlur = props.onBlur;
        }


        useEffect(() => {
            // console.log(field.name, field);
            if (meta.visible) {
                // Not needed / Confused
                if (!isGeneric && field.type !== 'group') {
                    helpers.setValue(field.name, field.value)
                } else {
                    let parent = props?.parent;
                    let parenttype = props?.parenttype;
                    if (parent && parenttype === 'group') {
                        helpers.setValue([parent, field.name], field.value)
                    }
                    if (parent && parenttype === 'repeater') {
                        // let parentValues = helpers.getValue(parent) || [];
                        // if (isArray(parentValues) && parentValues.length > 0) {
                        //     parentValues[props.index][field.name] = field.value;
                        //     helpers.setValue(parent, parentValues)
                        // } else {
                        //     parentValues = [...parentValues, ];
                        //     parentValues = { ...parentValues, [field.name]: field.value };
                        //     helpers.setValue(parent, parentValues)
                        // }
                    }
                }
            }
        }, [])

        useEffect(() => {
            if (isObject(trigger) && !isEmptyObj(trigger)) {
                useDefaults(field.name, helpers, field.value, trigger);
            }
        }, [field.value])


        if (!meta.visible) {
            return <></>;
        }

        return <WrappedComponent {...field} />;
    }
    return WithProps;
};

export default withProps;