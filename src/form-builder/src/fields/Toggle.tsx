import React, { useEffect, useState } from 'react'
import classNames from "classnames";
import Field from '../core/Field';
import { Column, Label, Row } from '../core/components';
import { withLabel } from '../core/hooks';

export const Toggle = (props) => {
    const { field, meta, helpers, options } = props;
    const { label, value } = field;
    const { styles: prevStyles } = meta;

    let styles = {
        type: "", // card
        label: {
            position: "right",
        },
        column: 4,
        ...prevStyles,
    };

    const componentClasses = classNames(
        "wprf-toggle-wrap",
        `wprf-${styles?.type}`,
        {
            "wprf-checked": Boolean(value),
            [`wprf-label-position-${styles?.label?.position}`]: styles?.label
                ?.position,
        },
        props?.classes
    );

    if (field.multiple) {
        const [localState, setLocalState] = useState({});
        const handleChange = (event) => {
            const target = event.target ? event.target : event.currentTarget;
            setLocalState(prevState => ({ ...prevState, [target.value]: target.checked }))
        }

        useEffect(() => {
            helpers.setValue(field.name, localState);
        }, [localState])

        useEffect(() => {
            setLocalState(meta.value || meta.default);
        }, [])

        return <div className="wprf-toggle-wrapper wprf-control">
            <Row>
                {options.map(item => {
                    return (
                        <Column key={item.value} column={styles.column}>
                            <div className={componentClasses}>
                                <Field
                                    meta={meta}
                                    helpers={helpers}
                                    field={{
                                        ...item,
                                        id: item.value,
                                        checked: !!localState?.[item.value],
                                        type: 'checkbox',
                                        onChange: handleChange
                                    }}
                                />
                                <Label htmlFor={item.value} />
                            </div>
                        </Column>
                    )
                })}
            </Row>
        </div>
    }

    return (
        <div className={componentClasses}>
            <Field meta={meta} helpers={helpers} field={{ ...field, type: 'checkbox' }} />
            <Label htmlFor={field.id} />
        </div>
    );
}

export default withLabel(Toggle);