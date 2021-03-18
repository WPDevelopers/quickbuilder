import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useBuilderContext } from '../core/hooks';

import BuilderField from '../core/BuilderField'
import { executeChange } from '../core/utils';

const Repeater = (props) => {
    const builderContext = useBuilderContext();
    const localMemoizedState = useMemo(() => {
        let localS = builderContext.values?.[props.name];
        if (localS && props.meta.default) {
            localS = [...props.meta.default, ...localS];
        }
        return localS;
    }, [])

    const [localState, setLocalState] = useState(localMemoizedState || []);

    useEffect(() => {
        if (props?.name == 'repeater') {
            console.log("localState", localState)
        }
    })

    const handleChange = useCallback((event) => {
        if (event.persist) {
            event.persist();
        }
        const { field, val: value } = executeChange(event);

        console.log(value, field)

        // setLocalState((prevState) => ([...prevState, value]));
    }, [])

    return (
        <div className="wprf-repeater-control">
            <div className="wprf-repeater-label">
                <h4>{props.label}</h4>
                <button className="wprf-repeater-button" onClick={() => setLocalState(prevLocalState => ([...prevLocalState, {}]))}>
                    {props.button.label}
                </button>
            </div>
            <div className="wprf-repeater-content">
                {
                    localState.map((field, index) => {
                        return <BuilderField key={index} name={`${props.name}_${index}`} handleChange={handleChange} type="group" fields={props.fields} />
                    })
                }

            </div>
        </div>
    )
}

export default Repeater;