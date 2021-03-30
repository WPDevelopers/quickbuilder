import React, { useEffect, useState } from "react";
import { isEmptyObj, isFunction, isObject, objectWithoutPropertiesLoose } from "../utils";
import { useBuilderContext, useDefaults } from "./index";

const withProps = (WrappedComponent) => {
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

        // if (isFunction(props.handleChange)) {
        //     field.onChange = props.handleChange;
        // }
        // if (isFunction(props.handleBlur)) {
        //     field.onBlur = props.handleBlur;
        // }

        const helpers = builderContext.getFieldHelpers();

        useEffect(() => {
            // Not needed / Confused
            helpers.setValue(field.name, field.value)
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