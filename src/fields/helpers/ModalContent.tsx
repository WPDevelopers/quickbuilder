import React, { useEffect, useState } from 'react'
import { isString, sortingFields } from '../../core/utils';
import { Field, GenericField } from '../.';
import { Loading } from '.';

const ModalContent = (props) => {
    const { isLoading, closeModal } = props;

    const [fields, setFields] = useState([]);

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
        <div className="wprf-modal-body">
            { isLoading && <Loading />}
            {
                !isLoading &&
                <>
                    <div className="wprf-modal-content">
                        {fields.length > 0 && fields}
                    </div>
                    <div className="wprf-modal-footer clearfix">
                        <div className="wprf-modal-footer-left">
                            {props.body?.footer && isString(props.body.footer) && <p>{props.body.footer}</p>}
                            <GenericField type="button" {...props?.confirm_button} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ModalContent;