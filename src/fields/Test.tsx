import React from 'react';
import { Button, Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyPopover = withState({
    isVisible: false,
})(({ isVisible, setState }) => {
    const toggleVisible = () => {
        setState((state) => ({ isVisible: !state.isVisible }));
    };
    return (
        <Button isSecondary onClick={toggleVisible}>
            Toggle Popover!
            { isVisible && (
                <Popover>
                    Popover is toggled!
                </Popover>
            )}
        </Button>
    );
});

export default MyPopover;