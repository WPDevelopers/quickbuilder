import React, { useEffect, useState } from 'react'
import { Button, RangeControl } from '@wordpress/components';
import { Label } from '../core/components';
import { isArray, isNumber, isString } from '../core/utils';

const Slider = ({ field, meta, helpers, ...props }) => {
    const { name, id, label, units, value, min, max, unit, tooltip, reset } = field;

    const [isValue, setValue] = useState(value || meta.default);
    const [sunit, setSunit] = useState(unit || "px");

    useEffect(() => {
        if (isValue) {
            let finalValue: number | string;
            if (isNumber(isValue)) {
                finalValue = `${isValue}${sunit}`;
            } else if (isString(isValue)) {
                if (!(isValue.indexOf('px') > -1)) {
                    finalValue = `${isValue}${sunit}`;
                } else {
                    finalValue = `${isValue}`;
                }
            }
            helpers.setValue(name, finalValue);
        }
    }, [isValue, sunit])

    return (
        <div className={`wprf-slider-wrap`}>
            <div className="wprf-slider-control-head">
                <Label htmlFor={id || name}>{label}</Label>
                {isArray(units) && units.length > 0 && (
                    <div className="wprf-slider-units">
                        {units.map((unit, index) => (
                            <Button
                                key={index}
                                isSmall
                                isPrimary
                                onClick={() => setSunit(unit)}
                                className={unit == sunit ? "unit-active" : ""}
                            >{unit}</Button>
                        ))}
                    </div>
                )}
            </div>
            <div className={`wprf-slider-control`}>
                <RangeControl
                    allowReset={reset ?? true}
                    value={parseInt(isValue)}
                    min={min}
                    max={max}
                    // showTooltip={tooltip ?? false}
                    onChange={(value) => setValue(value)}
                />
            </div>
        </div>
    )
}

export default Slider;