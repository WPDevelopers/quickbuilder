import React, { useEffect, useState } from 'react';
import { Button, Modal as WPModal } from '@wordpress/components';
import { Field, GenericField } from '.';
import { isString, sortingFields } from '../core/utils';

const Modal = (props) => {
    if (props?.body == undefined || props?.button == undefined) {
        throw new Error('Modal needs button/body with it.');
    }

    const { context } = props;
    const [fields, setFields] = useState([]);

    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        const newFields = sortingFields(props.body.fields);
        // context.setFormField([...props.parentIndex, 'fields'], newFields);
        let allFields = newFields.map((item, index) => {
            let parentIndex = [...props.parentIndex, 'fields', index];
            return <Field key={item.name} {...item} parentIndex={parentIndex} />;
        });
        setFields(allFields);
    }, [])

    return (
        <div className="wprf-control wprf-modal">
            <GenericField type="button" {...props?.button} onClick={openModal} />
            { isOpen && (
                <WPModal className="wprf-modal-body" title={props.body.header} onRequestClose={closeModal}>
                    <div className="wprf-modal-content">
                        {fields.length > 0 && fields}
                    </div>
                    <div className="wprf-modal-footer clearfix">
                        <div className="wprf-modal-footer-left">
                            {props.body?.footer && isString(props.body.footer) && <p>{props.body.footer}</p>}
                        </div>
                        <div className="wprf-modal-footer-right">
                            <GenericField type="button" text="Close" onClick={closeModal} />
                        </div>
                    </div>
                </WPModal>
            )}
        </div>
    )
}

export default Modal;