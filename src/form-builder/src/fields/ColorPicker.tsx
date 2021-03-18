import React, { useEffect, useRef, useState } from 'react'
import { ColorPicker as WPColorPicker } from "@wordpress/components";


const ColorPicker = ({ field, meta, helpers, ...props }) => {
    const { value, name, id } = field;
    const [showPicker, setShowPicker] = useState(false);
    const closeRef = useRef(null);

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
        helpers.setValue(name, value || meta.value || meta.default)
    }, [value, meta.value, meta.default]);

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
                                setShowPicker(false);
                                meta.default && helpers.setValue(name, meta.default)
                            }}
                        >
                            Reset
						</button>
                        <WPColorPicker
                            color={value}
                            onChangeComplete={(event) => helpers.setValue(name, event.hex)}
                        />
                    </>
                )}
            </div>
        </>
    )
}

export default ColorPicker;