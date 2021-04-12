import React, { useState } from 'react'
import classNames from 'classnames';
import { withLabel } from '../core/hooks';
import { hitAAJX, isObject } from '../core/utils';

const Button = (props) => {
    if (!props?.text) {
        throw new Error('Button has a required params #text.')
    }

    const [isLoading, setIsLoading] = useState(false)
    const handleClick = (event) => {
        if (props?.ajax) {
            setIsLoading(true);
            hitAAJX(props?.ajax, props.context).then(res => {
                setIsLoading(false);
                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: true
                    }
                })
            }).catch(err => {
                setIsLoading(false);
                //TODO: need to be fixed.
                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: false
                    }
                })
                console.log(err);
            });
        }
    }

    if (props?.href) {
        return (
            <a
                href={props?.href}
                target={props?.target}
                className={classNames('wprf-control wprf-button wprf-href-btn', props?.classes)}>
                {props?.text}
            </a>
        )
    }

    return (
        <button
            name={props.name}
            onClick={handleClick}
            className={classNames('wprf-control wprf-button wprf-btn', props?.classes)}>
            {
                isObject(props?.text) && props?.ajax ?
                    (isLoading ? props?.text?.loading : (props.value ? props?.text?.saved : (props?.text?.normal)))
                    : props?.text
            }
        </button>
    )
}

export default withLabel(Button);