import React from 'react'
const ControlLabel = (props) => {
    const { id, label, badge, badgePosition, context, ...rest } = props;
    if (!(label && label.length > 0)) {
        return null;
    }

    /**
     * Icon need to be fixed
     * context?.icons?.[rest?.icon] through context
     */

    return (
        <div className="wprf-control-label">
            {badgePosition == 'left' && badge}
            <label htmlFor={id}>{label}</label>
            {rest?.link && <a rel="nofollow" target="_blank" href={rest.link}>{context?.icons?.link}</a>}
            {badgePosition == 'right' && badge}
        </div>
    )
}
export default ControlLabel;