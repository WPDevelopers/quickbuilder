import React, { useEffect, useState } from "react";
import { isFunction, objectWithoutPropertiesLoose } from "../utils";
import { useBuilderContext } from "./index";

const withProps = (WrappedComponent) => {
    const WithProps = (props) => {
        // console.log("WithProps props", props)
        const builderContext = useBuilderContext();

        let field: any = objectWithoutPropertiesLoose(
            props.field,
            ['validation_rules', 'default', 'rules', 'meta', 'options', 'trigger', 'is_pro', 'switch']
        );
        field = builderContext.getFieldProps(field);

        const { validation_rules, default: defolt, rules, options, trigger, styles, fields } = props.field;

        const meta = {
            ...builderContext.getFieldMeta(field.name, props),
            ...props.meta,
            validation_rules,
            default: defolt,
            rules,
            options,
            trigger,
            styles,
            fields
        };

        if (isFunction(props.handleChange)) {
            field.onChange = props.handleChange;
        }
        if (isFunction(props.handleBlur)) {
            field.onBlur = props.handleBlur;
        }


        const helpers = builderContext.getFieldHelpers(props);
        const inputFieldsAttributes = { field, meta, helpers }

        return <WrappedComponent {...inputFieldsAttributes} />;
    }
    return WithProps;
};

export default withProps;