import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Field } from '.';
import { useTrigger, withLabel } from '../core/hooks';
import { hitAAJX, isObject, validFieldProps } from '../core/utils';

const Button = (props) => {
    if (!props?.text && props?.group !== true) {
        throw new Error(__('Button has a required params #text.', 'betterdocs'))
    }
    const validProps = validFieldProps(props, [
        "is_pro",
        "visible",
        "disable",
        "parentIndex",
        "context",
        "onBlur",
        "value",
        'ajax',
        'text'
    ]);


    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (event) => {
        if (props?.ajax) {
            setIsLoading(true);
            hitAAJX(props.ajax, props.context).then(res => {
                setIsLoading(false);

                if(res?.status == 'error'){
                    throw new Error(res?.message);
                }

                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: true
                    }
                });

                if (!props.ajax?.hideSwal) {
                    const type    = props.ajax?.swal?.icon || 'success';
                    const message = props.ajax?.swal?.text || 'Complete';
                    props.context.alerts.toast(type, message, {autoClose: props.ajax?.swal?.autoClose});
                }
                if (props.ajax?.reload) {
                    setTimeout(() => window.location.reload(), 1000);
                }
            }).catch(err => {
                console.error('Error In Button Called', props.name, err);
                setIsLoading(false);
                //TODO: need to be fixed.
                props.onChange({
                    target: {
                        type: 'button',
                        name: props.name,
                        value: false
                    }
                });
                if (!props.ajax?.hideSwal) {
                    props.context.alerts.toast('error', err?.message || __(`Something went wrong.`, 'betterdocs'));
                }

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
        <>
            <button
                {...validProps}
                name={props.name}
                disabled={isLoading}
                onClick={props?.onClick ?? handleClick}
                className={classNames('wprf-control wprf-button wprf-btn', props?.classes)}>
                {
                    isObject(props?.text) && props?.ajax ?
                        (isLoading ? props?.text?.loading : (props.value ? props?.text?.saved : (props?.text?.normal)))
                        : props?.text
                }
            </button>
        </>
    )
}

export default withLabel(Button);
