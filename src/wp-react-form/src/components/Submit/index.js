import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";

// SCSS
import "./submit.scss";
import { getStoreData } from "../../core/functions";

const Submit = ({ config, ...rest }) => {
    const [isSubmit, setSubmit] = useState(false);
    // const [isDisabled, setDisabled] = useState(false);
    /**
     * This is default submit function
     */
    const onSubmit = (evt) => {
        setSubmit(true); // Set Submit is True
        console.log("on confirm validation: form validation");
        if (!config?.onSubmit) {
            console.log("form has no onsubmit, run default one");
            console.log("values", getStoreData().getValues());
            console.log("event", evt);
        } else {
            console.log("form has an onsubmit func implemented, run thats one");
            config.onSubmit(evt);
        }
        setSubmit(false);
    };

    const componentClasses = classNames("wprf-submit-button", rest?.className, {
        "wprf-form-submitting": isSubmit,
    });
    return (
        <Button className={componentClasses} onClick={(evt) => onSubmit(evt)}>
            {config.label}
        </Button>
    );
};
export default Submit;
