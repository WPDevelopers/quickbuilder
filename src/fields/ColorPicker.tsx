import React, { useEffect, useRef, useState } from 'react'
import { ColorPicker as WPColorPicker } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import { addFilter } from "@wordpress/hooks";
import { withLabel } from '../core/hooks';


const _ColorPicker = (props) => {
    const { value, name, id, onChange } = props;
    const [showPicker, setShowPicker] = useState(false);
    const [color, setColor] = useState(value || null)
    const [defaultColor, setDefaultColor] = useState(null)
    const closeRef = useRef(null);

    useEffect(() => {
        setDefaultColor(value);
    }, [])

    const handleCloseRef = (ref) => {
        useEffect(() => {
            const handleClickOutside = (ev) => {
                if (ref.current && !ref.current.contains(ev.target)) {
                    setShowPicker(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    useEffect(() => {
        onChange({
            target: {
                type: 'colorpicker',
                name,
                value: color,
            },
        });
    }, [color]);

    handleCloseRef(closeRef);

    return (
        <>
            <div className="wprf-colorpicker-wrap" ref={closeRef}>
                <input type="hidden" value={value} name={name} id={id} />
                <span
                    className="wprf-picker-display"
                    style={{ backgroundColor: value, borderColor: value }}
                    onClick={() => setShowPicker(!showPicker)}
                ></span>
                {showPicker && (
                    <>
                        <button
                            className="wprf-colorpicker-reset"
                            onClick={(e) => {
                                e.preventDefault();
                                setColor(defaultColor);
                                setShowPicker(false);
                            }}
                        >
                            {__('Reset', 'notificationx')}
                        </button>
                        <WPColorPicker
                            color={value}
                            onChangeComplete={(event) => setColor(event.hex)}
                        />
                    </>
                )}
            </div>
        </>
    )
}

const ColorPicker = withLabel(_ColorPicker);
export default ColorPicker;

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('colorpicker' === type) {
    return <ColorPicker {...props} />;
  }
  return field;
});
