import React, { useState } from 'react'
import classNames from 'classnames';
import { withLabel, useTrigger } from '../core/hooks';
import { hitAAJX, isObject, validFieldProps } from '../core/utils';
import { Field } from '.';
import Swal from 'sweetalert2';

const Button = (props) => {
    if (!props?.text && props?.group !== true) {
        throw new Error('Button has a required params #text.')
    }
    const validProps = validFieldProps(props, [
        "is_pro",
        "visible",
        "disable",
        "parentIndex",
        "context",
        "onBlur",
        "value",
        'ajax'
    ]);


    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (event) => {
        if (props?.ajax) {
            setIsLoading(true);
            hitAAJX(props.ajax, props.context).then(res => {
                setIsLoading(false);
                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: true
                    }
                });

                if(!props.ajax?.hideSwal)
                    Swal.fire({
                        text: props.ajax?.swal?.text || 'Complete',
                        title: props.ajax?.swal?.title || 'Complete',
                        icon: props.ajax?.swal?.icon || 'success',
                        timer: 1500,
                    });
            }).catch(err => {
                console.log(err);

                setIsLoading(false);
                //TODO: need to be fixed.
                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: false
                    }
                });
                if(!props.ajax?.hideSwal)
                    Swal.fire({
                        text: 'Something went wrong.',
                        title: '!!!',
                        icon: 'error',
                        timer: 1500,
                    });
            });
        }
        useTrigger(props);
    }


    if (props?.href) {
        return (
            <a
                href={props?.href === -1 ? props?.value : props?.href}
                target={props?.target}
                className={classNames('wprf-control wprf-button wprf-href-btn', props?.classes)}>
                {props?.text}
            </a>
        )
    }

    if (props?.group) {
        let allFields = props.fields.map((item, index) => {
            let parentIndex = [...props.parentIndex, 'fields', index];
            return <Field key={item.name} {...item} parentIndex={parentIndex} />;
        });

        return <div className="wprf-control wprf-button-group wprf-flex">
            {allFields}
        </div>
    }

    return (
        <button
            {...validProps}
            name={props.name}
            onClick={props?.onClick ?? handleClick}
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