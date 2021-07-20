import React from "react";
import classNames from "classnames";
import { validFieldProps } from "../utils";
import { Badge, ControlField, ControlLabel } from "../components";

import { useInstanceId } from "@wordpress/compose";

const withLabel = (WrappedComponent) => {
    const WithLabel = (props) => {
        let { label, id, name, type, style: prevStyle, is_pro, badge } = props;
        const instanceId = useInstanceId(withLabel);


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
                {
                    is_pro == true &&
                    <Badge
                        {...badge}
                        renderLabel={(badge, position) => <ControlLabel badge={badge} badgePosition={position} label={label} id={id} />}
                        renderComponent={() => <ControlField
                            help={props?.help}
                            description={props?.description}
                            position={styles?.description?.position}
                            renderComponent={() => <WrappedComponent {...validProps} id={id} />}
                        />}
                    />
                }
                {
                    (is_pro == false || is_pro == undefined) && <>
                        {label && label.length > 0 &&
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
                    </>
                }
            </div >
        );
    }

    return WithLabel;
};

export default withLabel;