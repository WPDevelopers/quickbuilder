import React, { useRef } from "react";
import { DateTimePicker, DatePicker, TimePicker, Button, ButtonGroup } from "@wordpress/components";
import { __experimentalGetSettings } from "@wordpress/date";

const DateControl = (props, ref) => {
    const settings = __experimentalGetSettings();

    // const divRef = useRef(null);


    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.time
            .toLowerCase() // Test only the lower case a
            .replace(/\\\\/g, "") // Replace "//" with empty strings
            .split("")
            .reverse()
            .join("") // Reverse the string and test for "a" not followed by a slash
    );

    // console.log("ref", ref, props);
    // console.log(divRef)

    return (
        <div className="wprf-control-datetime">
            {/* <button onClick={() => divRef.current.classList.add()}>Tarikh</button> */}
            <DateTimePicker
                onChange={(date) => props.helpers.setValue(props.name, date)}
                is12Hour={is12HourTime}
            />
        </div>
    );
};

export default DateControl;
