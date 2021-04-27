import React, { useEffect, useRef } from "react";
import { DateTimePicker, DatePicker, TimePicker, Dropdown, Button } from "@wordpress/components";
// @ts-ignore
import { __experimentalGetSettings, date } from "@wordpress/date";
import { withLabel } from "../core/hooks";

const DateControl = (props) => {

    const { name, value, onChange } = props;

    const settings: any = __experimentalGetSettings();
    const format = props?.format ?? settings.formats.datetime;
    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.datetime
            .toLowerCase()
            .replace(/\\\\/g, "")
            .split("")
            .reverse()
            .join("")
    );

    useEffect(() => {
        if (value == undefined) {
            // helpers.setValue(name, date('c', value))
        }
    }, [])

    return (
        <Dropdown
            className="wprf-control-datetime"
            renderToggle={({ isOpen, onToggle }) => (<Button isTertiary onClick={onToggle}>
                {date(format, value, settings.timezone.string)}
            </Button>)}
            renderContent={() => {
                return (
                    <DateTimePicker
                        currentDate={date(format, value, settings.timezone.string) || date(format, new Date(), settings.timezone.string)}
                        onChange={(date) => {
                            onChange({
                                target: {
                                    type: 'date',
                                    name,
                                    value: date ?? (value || new Date()),
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
