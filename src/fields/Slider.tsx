import React, { useEffect, useState } from 'react'
import { Button, RangeControl } from '@wordpress/components';
import { addFilter } from "@wordpress/hooks";
import { Label } from '../core/components';
import { isArray, isNumber, isString } from '../core/utils';

const Slider = (props) => {
    const { name, id, label, units, value, min, max, unit, tooltip, reset } = props;

    const [isValue, setValue] = useState(value || 0);
    const [sunit, setSunit] = useState(unit);

    useEffect(() => {
        if (isValue) {
            let finalValue: number | string;

            if (isNumber(isValue)) {
                if (sunit) {
                    finalValue = `${isValue}${sunit}`;
                } else {
                    finalValue = `${isValue}`;
                }
            } else if (isString(isValue)) {
                if (!(isValue.indexOf(sunit) > -1)) {
                    finalValue = `${isValue}${sunit}`;
                } else {
                    finalValue = `${isValue}`;
                }
            }
            props.onChange({
                target: {
                    type: 'slider',
                    name: name,
                    value: finalValue,
                }
            });
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

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('slider' === type) {
    return <Slider {...props} />;
  }
  return field;
});
