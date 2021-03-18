import React, { useEffect, useRef } from "react";
import { DateTimePicker, DatePicker, TimePicker, Dropdown, Button } from "@wordpress/components";
import { __experimentalGetSettings, date } from "@wordpress/date";

const DateControl = (props) => {
    const settings = __experimentalGetSettings();
    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.datetime
            .toLowerCase()
            .replace(/\\\\/g, "")
            .split("")
            .reverse()
            .join("")
    );

    useEffect(() => {
        if (props.meta.value == undefined) {
            props.helpers.setValue(props.name, date('c', props.meta.value))
        }
    }, [])

    return (
        <Dropdown
            className="wprf-control-datetime"
            renderToggle={({ isOpen, onToggle }) => (<Button isTertiary onClick={onToggle}>
                {date(settings.formats.datetime, props.meta.value, settings.timezone.string)}
            </Button>)}
            renderContent={() => {
                return (
                    <DateTimePicker
                        currentDate={date(settings.formats.datetime, props.meta.value) || date(settings.formats.datetime, Date.now())}
                        onChange={(date) => props.helpers.setValue(props.name, date ?? (props.meta.default || new Date()))}
                        is12Hour={is12HourTime}
                    />
                )
            }}>
        </Dropdown>
    );
};

export default DateControl;
