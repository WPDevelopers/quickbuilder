import React, { useCallback, useState } from 'react';
import { GenericField } from '.';
import { ModalContent, ModalHeader } from './helpers';
import SweetAlert from 'react-bootstrap-sweetalert';
import { hitAAJX } from '../core/utils';

const Modal = (props) => {
    if (props?.body == undefined || props?.button == undefined) {
        throw new Error('Modal needs button/body with it.');
    }

    const [isOpen, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const onConfirm = useCallback(() => { }, []);

    return (
        <div className="wprf-control wprf-modal" id={`wprf-modal-${props.name}`}>
            <GenericField type="button" {...props?.button} onClick={openModal} />
            { isOpen &&
                <SweetAlert
                    style={{
                        width: '900px'
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
        </div>
    )
}

export default Modal;