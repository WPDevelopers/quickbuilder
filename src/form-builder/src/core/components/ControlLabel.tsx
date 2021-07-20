import React from 'react'
const ControlLabel = ({ id, label, badge, badgePosition }) => {
    if (!(label && label.length > 0)) {
        return;
    }
    return (
        <div className="wprf-control-label">
            {badgePosition == 'left' && badge}
            <label htmlFor={id}>{label}</label>
            {badgePosition == 'right' && badge}
        </div>
    )
}
export default ControlLabel;