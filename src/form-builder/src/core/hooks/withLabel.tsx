import React from "react";
import classNames from "classnames";
import { validFieldProps } from "../utils";

import { useInstanceId } from "@wordpress/compose";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        let { label, id, name, type, placeholder } = props;

        const instanceId = useInstanceId(withLabel);

        if (id == undefined) {
            id = name;
        }

        if (label === undefined || label === '' || label.length <= 0) {
            return <WrappedComponent {...props} id={id} />;
        }

        const validProps = validFieldProps(props, ['description', 'label', 'help'])
        const componentClasses = classNames("wprf-control-wrapper", `wprf-type-${type}`);

        return (
            <div className={componentClasses}>
                <div className="wprf-control-label">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="wprf-control-field">
                    <WrappedComponent {...validProps} id={id} />
                    {props?.description && <p className="wprf-description" dangerouslySetInnerHTML={{ __html: props.description }}></p>}
                    {props?.help && <p className="wprf-help" dangerouslySetInnerHTML={{ __html: props.help }}></p>}
                </div>
            </div>
        );
    }

    return WithLabel;
};

export default withLabel;