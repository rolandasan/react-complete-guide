import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

interface ModalProps {
    onClose: () => void;
}

interface BackdropProps {
    onClose: () => void;
}

interface ModalOverlayProps {
    children: any;
}

export const Backdrop: React.FC<BackdropProps> = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

export const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays')!;
export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
};
