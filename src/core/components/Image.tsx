import React from "react";
import classNames from "classnames";

const Image = (props) => {
    if (!props?.src) {
        return <p>No Source( src ) Defined</p>;
    }

    const componentClasses = classNames(["wprf-input-image", props?.className]);

    return (
        <img className={componentClasses} src={props?.src} alt={props?.alt} />
    );
};

export default Image;