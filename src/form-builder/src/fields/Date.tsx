import React, { useEffect, useRef } from "react";
import { DateTimePicker, DatePicker, TimePicker, Dropdown, Button } from "@wordpress/components";
import { __experimentalGetSettings, date } from "@wordpress/date";

const DateControl = ({ field, meta, helpers, ...rest }) => {
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
        if (meta.value == undefined) {
            helpers.setValue(field.name, date('c', meta.value))
        }
    }, [])

    return (
        <Dropdown
            className="wprf-control-datetime"
            renderToggle={({ isOpen, onToggle }) => (<Button isTertiary onClick={onToggle}>
                {date(settings.formats.datetime, meta.value, settings.timezone.string)}
            </Button>)}
            renderContent={() => {
                return (
                    <DateTimePicker
                        currentDate={date(settings.formats.datetime, meta.value) || date(settings.formats.datetime, Date.now())}
                        onChange={(date) => helpers.setValue(field.name, date ?? (meta.default || new Date()))}
                        is12Hour={is12HourTime}
                    />
                )
            }}>
        </Dropdown>
    );
};

export default DateControl;
