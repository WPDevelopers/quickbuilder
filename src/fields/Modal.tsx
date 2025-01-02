import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GenericField } from '.';
import { ModalContent, ModalHeader } from './helpers';
import SweetAlert from 'react-bootstrap-sweetalert';
import { __ } from '@wordpress/i18n';

const Modal = (props) => {
    if (props?.body == undefined || props?.button == undefined) {
        throw new Error(__('Modal needs button/body with it.', 'notificationx'));
    }

    const [isOpen, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const onConfirm = useCallback(() => { }, []);


    const prevCancelValueRef = useRef();
    useEffect(() => {
        prevCancelValueRef.current = props.context.values?.[props.cancel];
    });
    const prevCancelValue = prevCancelValueRef.current;

    const afterUpdate = () => {
        const currentCancelValue = props.context.values?.[props.cancel];
        if (props?.cancel && currentCancelValue && currentCancelValue !== prevCancelValue) {
            closeModal();
        }
    }

    return (
        <div className="wprf-control wprf-modal" id={`wprf-modal-${props.name}`}>
            { !props?.close_on_body && <GenericField type="button" {...props?.button} onClick={openModal} /> }
            { props?.show_body &&
                <div className='wprf-control wprf-modal-show-body'>
                    {props?.body?.fields?.map((item) => {
                        if (item.type === "text") {
                            return <div className='wprf-control wprf-modal-body-value-heading'>
                                    <h4 key={item.name}>{props.context.values?.[item.name]}</h4>
                                    { props?.close_on_body && <GenericField type="button" {...props?.button} onClick={openModal} /> }
                                </div>;
                        } else if (item.type === "textarea") {
                            return <p key={item.name}>{props.context.values?.[item.name]}</p>;
                        }
                        return null;
                    })}
                </div>
            }
            {isOpen &&
                <SweetAlert
                    customClass="wprf-modal-inner"
                    style={{
                        maxWidth: '900px',
                        width: '100%',
                        overflowY: 'scroll',
                        margin: '50px auto',
                    }}
                    closeBtnStyle={{
                        top: '5px',
                        right: '5px',
                        color: '#f78c8c',
                        fontSize: '18px',
                        border: '1px solid #f78c8c',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    title={<ModalHeader content={props?.body?.header} />}
                    onConfirm={onConfirm}
                    showConfirm={false}
                    showCloseButton={true}
                    closeOnClickOutside={true}
                    onCancel={closeModal}
                    afterUpdate={() => afterUpdate}
                >
                    <ModalContent
                        {...props}
                        isLoading={isLoading}
                        closeModal={closeModal}
                        context={props.context}
                        onConfirm={onConfirm}
                    />
                </SweetAlert>
            }
        </div >
    )
}

export default Modal;