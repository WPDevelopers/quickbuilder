import { Button, DateTimePicker, Dropdown } from "@wordpress/components";
import React, { useEffect } from "react";
// @ts-ignore
import { date, __experimentalGetSettings } from "@wordpress/date";
import moment from "moment";
import { withLabel } from "../core/hooks";
import { getTime } from "../core/utils";

const DateControl = (props) => {
    const { name, value, onChange, position } = props;

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
        // if (!value) {
            onChange({
                target: {
                    type: 'date',
                    name,
                    value: _value
                },
            });
            //     // helpers.setValue(name, date('c', value))
        // }
    }, [])

    return (
        <Dropdown
            className="wprf-control-datetime"
            contentClassName="wprf-control-datetime-content"
            position={position ? position : "bottom right"}
            renderToggle={({ isOpen, onToggle }) => (<Button isTertiary onClick={onToggle}>
                {/* @ts-ignore */}
                {date(format, _value, -(new Date).getTimezoneOffset())}
            </Button>)}
            renderContent={() => {
                // console.log(getTime(value), getTime(value).toDate());

                return (
                    <DateTimePicker
                        // @ts-ignore
                        __nextRemoveHelpButton={true}
                        __nextRemoveResetButton={true}
                        currentDate={getTime(_value).toDate().toString()}
                        onChange={(date) => {
                            onChange({
                                target: {
                                    type: 'date',
                                    name,
                                    value: moment(date).utc().format(),
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
