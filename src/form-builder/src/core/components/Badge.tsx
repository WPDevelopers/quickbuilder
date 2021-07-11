import React from 'react'
import classNames from "classnames";
import { useBuilderContext } from '../hooks';

const Badge = (props) => {
    const builderContext = useBuilderContext();

    const { label, active } = props;
    const componentClasses = classNames('wprf-badge-item', {
        'wprf-badge-active': active
    });

    let componentProps = {};

    if (!builderContext.is_pro_active) {
        componentProps = {
            onClick: (e) => {
                e.preventDefault();
                builderContext.alerts.pro_alert.fire();
            }
        }
    }

    return (
        <div {...componentProps}>
            <div className="wprf-badge">
                <sup className={componentClasses}>{label}</sup>
            </div>
            {props.children}
        </div>
    )
}

export default Badge;