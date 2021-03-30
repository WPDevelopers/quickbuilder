import React from "react";
import { useBuilderContext } from "./index";

const withChange = (WrappedComponent) => {
    const WithChange = (props) => {
        const handleChange = (value) => {
            console.log(value)
        }

        return <WrappedComponent {...props} />
    }
    return WithChange;
};

export default withChange;