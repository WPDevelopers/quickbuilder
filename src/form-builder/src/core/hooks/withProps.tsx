import React, { useEffect, useState } from "react";
import { useBuilderContext } from "./index";

const withProps = (WrappedComponent) => {
    const WithProps = (props) => {
        const builderContext = useBuilderContext();

        const value = builderContext.values?.[props.field.name] ?? props.field.value ?? props.field.default ?? null;
        return <WrappedComponent {...{ ...props, field: { ...props.field, value } }} />;
    }
    return WithProps;
};

export default withProps;