import React from "react";
import classNames from "classnames";

const withStyles = (WrappedComponent) => {
    const WithStyles = (props) => {
        const styles = { ...props?.style };

        const componentClasses = classNames(`wprf-${props.name}`, {
            [`wprf-${styles?.type}`]: styles?.type ?? false
        });

        return <WrappedComponent {...props} styles={componentClasses} />
    }
    return WithStyles;
};
export default withStyles;