import React, { useCallback, useState } from 'react';
import { GenericField } from './Field';
import { ModalContent, ModalHeader } from './helpers';
import SweetAlert from 'react-bootstrap-sweetalert';
import { __ } from '@wordpress/i18n';
import { addFilter } from "@wordpress/hooks";

const Modal = (props) => {
    if (props?.body == undefined || props?.button == undefined) {
        throw new Error(__('Modal needs button/body with it.', 'notificationx'));
    }

    const [isOpen, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const onConfirm = useCallback(() => { }, []);

    return (
        <div className="wprf-control wprf-modal" id={`wprf-modal-${props.name}`}>
            <GenericField type="button" {...props?.button} onClick={openModal} />
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
                    afterUpdate={() => {
                        if (props?.cancel) {
                            if (props.context.values?.[props.cancel]) {
                                closeModal();
                            }
                        }
                    }}
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

addFilter('custom_field', 'wprf', (field, type, props) => {
  if ('modal' === type) {
    return <Modal {...props} />;
  }
  return field;
});
