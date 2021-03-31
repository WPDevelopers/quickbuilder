import React, { useEffect, useState } from "react";
import { isArray, isEmptyObj, isFunction, isObject } from "../utils";
import { useBuilderContext, useDefaults } from "./index";

const withProps = (WrappedComponent, isGeneric = false) => {
    const WithProps = (props) => {
        const builderContext = useBuilderContext();
        let field: any = builderContext.getFieldProps(props);

        const { validation_rules, default: defolt, rules, label, options, trigger, styles, fields } = props;

        // const meta = {
        //     ...builderContext.getFieldMeta(field.name, props),
        //     ...props.meta,
        //     validation_rules,
        //     default: defolt,
        //     label,
        //     rules,
        //     options,
        //     trigger,
        //     styles,
        //     fields
        // };

        const meta = builderContext.getFieldMeta(field.name, props);

        if (isFunction(props.onChange)) {
            field.onChange = props.onChange;
        }
        if (isFunction(props.onBlur)) {
            field.onBlur = props.onBlur;
        }

        const helpers = builderContext.getFieldHelpers();

        useEffect(() => {
            // Not needed / Confused
            if (!isGeneric) {
                helpers.setValue(field.name, field.value)
            } else {
                let parent = props?.parent;
                let parenttype = props?.parenttype;
                if (parent && parenttype === 'group') {
                    let parentValues = helpers.getValue(parent) || {};
                    if (isEmptyObj(parentValues)) {
                        parentValues[field.name] = field.value;
                        helpers.setValue(parent, parentValues)
                    } else {
                        parentValues = { ...parentValues, [field.name]: field.value };
                        helpers.setValue(parent, parentValues)
                    }
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