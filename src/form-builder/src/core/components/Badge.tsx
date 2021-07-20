import React, { useCallback } from 'react'
import classNames from "classnames";
import { useBuilderContext } from '../hooks';


const BadgeComp = ({ componentClasses, label }) => {
    return <div className="wprf-badge">
        <sup className={componentClasses}>{label}</sup>
    </div>
}

const Badge = (props) => {
    const builderContext = useBuilderContext();
    let { label, active, position = 'right', renderLabel, renderComponent } = props;
    if (label === undefined) {
        label = 'Pro';
    }

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
        <div className="wprf-badge-wrapper" {...componentProps}>
            {
                position === 'left' &&
                label.length > 0 &&
                <>
                    {renderLabel(<BadgeComp componentClasses={componentClasses} label={label} />, 'left')}
                </>
            }
            {
                position === 'right' &&
                label.length > 0 &&
                <>
                    {renderLabel(<BadgeComp componentClasses={componentClasses} label={label} />, 'right')}
                    {/* <div className="wprf-badge">
                        <sup className={componentClasses}>{label}</sup>
                    </div> */}
                </>
            }
            {renderComponent()}
        </div>
    )
}

export default Badge;