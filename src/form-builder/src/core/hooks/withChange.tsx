import React from "react";
import { useBuilderContext } from "./index";

const withChange = (WrappedComponent) => {
    const WithChange = (props) => {
        return <WrappedComponent onChange={props.onChange} {...props} />
    }
    return WithChange;
};

export default withChange;