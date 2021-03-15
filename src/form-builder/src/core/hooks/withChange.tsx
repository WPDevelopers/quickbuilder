import React from "react";
import { useBuilderContext } from "./index";

const withChange = (WrappedComponent) => {
    const WithChange = (props) => {
        const builderContext = useBuilderContext()
        const handleChange = (value: any, args: any = {}) => {
            builderContext.setFieldValue(props.name, value);
        }
        return <WrappedComponent {...props} value={builderContext.values[props.name]} onChange={handleChange} />
    }
    return WithChange;
};

export default withChange;