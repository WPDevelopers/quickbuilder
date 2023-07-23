import React from 'react'
const ControlLabel = (props) => {
    const { id, label, badge, badgePosition, context,info, ...rest } = props;
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
			{info && <div className='wprf-info'>
				<button className='wprf-info-button'>Info</button>
				<p className="wprf-info-text"><span dangerouslySetInnerHTML={{ __html: info }} /></p>
			</div>}
            {rest?.link && <a rel="nofollow" target="_blank" href={rest.link}>{context?.icons?.link}</a>}
            {badgePosition == 'right' && badge}
        </div>
    )
}
export default ControlLabel;
