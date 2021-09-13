import React, { useEffect } from "react";
import { DateTimePicker, DatePicker, TimePicker, Dropdown, Button } from "@wordpress/components";
// @ts-ignore
import { __experimentalGetSettings, date } from "@wordpress/date";
import { withLabel } from "../core/hooks";
import { getTime } from "../core/utils";

const DateControl = (props) => {
    const { name, value, onChange } = props;

    const settings: any = __experimentalGetSettings();
    const format = props?.format ?? settings.formats.datetime;
    const _value = getTime(value);

    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.datetime
            .toLowerCase()
            .replace(/\\\\/g, "")
            .split("")
            .reverse()
            .join("")
    );

    useEffect(() => {
        if (!value) {
            onChange({
                target: {
                    type: 'date',
                    name,
                    value: _value
                },
            });
            //     // helpers.setValue(name, date('c', value))
        }
    }, [])

    return (
        <Dropdown
            className="wprf-control-datetime"
            renderToggle={({ isOpen, onToggle }) => (<Button isTertiary onClick={onToggle}>
                {/* @ts-ignore */}
                {date(format, _value, undefined)}
            </Button>)}
            renderContent={() => {
                return (
                    <DateTimePicker
                        // @ts-ignore
                        currentDate={getTime(_value)}
                        onChange={(date) => {
                            onChange({
                                target: {
                                    type: 'date',
                                    name,
                                    value: getTime(date, true),
                                },
                            });
                        }}
                        is12Hour={is12HourTime}
                    />
                )
            }}>
        </Dropdown>
    );
};


export default withLabel(DateControl);
