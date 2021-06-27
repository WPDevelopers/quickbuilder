import React from "react";
import classNames from "classnames";
import { validFieldProps } from "../utils";

import { useInstanceId } from "@wordpress/compose";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        let { label, id, name, type, style: prevStyle } = props;

        const instanceId = useInstanceId(withLabel);
        // console.log('WithLabel', props);


        if (id == undefined) {
            id = name;
        }

        const styles = {
            description: {
                position: 'right',
            },
            ...prevStyle
        }

        const styleClasses = classNames({
            [`wprf-style-${styles?.type}`]: (styles?.type || false),
            'wprf-label-none': label === undefined || label === '' || label.length === 0,
            [`wprf-${styles?.label?.position || 'inline'}-label`]: (styles?.label?.position ?? true) && label != undefined
        });


        if (type === 'hidden') {
            return <WrappedComponent {...props} id={id} />;
        }

        const validProps = validFieldProps(props, ['description', 'label', 'help', 'style'])
        const componentClasses = classNames("wprf-control-wrapper", `wprf-type-${type}`, `wprf-name-${name}`, styleClasses, props?.classes);

        return (
            <div className={componentClasses}>
                { label && label.length > 0 &&
                    <div className="wprf-control-label">
                        <label htmlFor={id}>{label}</label>
                    </div>
                }
                <div className="wprf-control-field">
                    {
                        styles?.description?.position === 'left' && props?.description &&
                        <p className="wprf-description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    }
                    <WrappedComponent {...validProps} id={id} />
                    {
                        styles?.description?.position === 'right' && props?.description &&
                        <p className="wprf-description" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    }
                    {props?.help && <p className="wprf-help" dangerouslySetInnerHTML={{ __html: props.help }}></p>}
                </div>
            </div>
        );
    }

    return WithLabel;
};

export default withLabel;