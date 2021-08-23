import React, { useState } from 'react'
import classNames from 'classnames';
import { withLabel, useTrigger } from '../core/hooks';
import { hitAAJX, isObject, validFieldProps } from '../core/utils';
import { Field } from '.';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        'ajax',
        'text'
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

                if (!props.ajax?.hideSwal)
                    toast.info(
                        "Complete Successfully",
                        {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    )
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
                    toast.error("Oops, Something went wrong. Please try again.", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
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
            <ToastContainer />
        </>
    )
}

export default withLabel(Button);