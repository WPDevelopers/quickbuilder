import React, { useCallback, useRef, useState } from 'react'

import { Popover as WPPopover } from '@wordpress/components'

const Popover = (props) => {
    if (!props.children) {
        throw new Error('Popover must have children to render.');
    }
    if (!props.renderToggle) {
        throw new Error('Popover must have renderToggle as props .');
    }
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    // const onToggle = useCallback(
    //     () => {
    //         console.log('ddd', !isOpen)
    //     },
    //     [],
    // )

    // const onToggle = (event) => {
    //     setIsOpen(!isOpen);
    // }

    const toggle = (event) => {
        setIsOpen(!isOpen);
    }

    const args = { isOpen, onToggle: toggle }

    return (
        <div className="wprf-control-popover">
            {props.renderToggle(args)}
            { isOpen &&
                <div className="wprf-control-popover-content" ref={ref}>
                    {props.children}
                </div>
            }
        </div>
    );
}

export default Popover;