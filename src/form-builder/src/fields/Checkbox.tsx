import React from "react";
import Field from "../core/Field";
import withChange from "../core/hooks/withChange";

function Checkbox(props) {
    const { name, label, value, ...rest } = props;

    return (
        <Field
            type="checkbox"
            id={name}
            name={name}
            value={value}
            size={rest?.size ?? "large"}
            {...rest}
        />
    );
}

export { Checkbox }

export default Checkbox;
// export default withChange(Checkbox);