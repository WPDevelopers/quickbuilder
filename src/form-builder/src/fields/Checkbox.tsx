import React from "react";
import { Input } from ".";

function Checkbox(props) {
    const { name, label, value, ...rest } = props;

    return (
        <Input
            type="checkbox"
            id={name}
            name={name}
            value={value}
            size={rest?.size ?? "large"}
            {...rest}
        />
    );
}

export default Checkbox;