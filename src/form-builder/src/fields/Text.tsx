import React, { useEffect, useLayoutEffect } from "react";
import Field from "../core/Field";
import withChange from "../core/hooks/withChange";
import withLabel from "../core/hooks/withLabel";

function Text(props) {
    const { name, label, value, ...rest } = props;

    useEffect(() => {
        if (!!value) {
            rest.onChange(value);
        }
    }, [])


    return (
        <Field
            type="text"
            id={name}
            name={name}
            value={value}
            {...rest}
            onChange={(event) => rest.onChange(event.target.value)}
        />
    );
}

const TextWithLabel = withLabel(Text);

export { Text }
export { TextWithLabel };

export default withChange(Text);