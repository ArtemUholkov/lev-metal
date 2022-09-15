import React from 'react';
import './modal.scss';

function Modal( {active, setActive, children} ) {

    

    return (
        <div className={ active ? "modal active" : "modal inactive"} onClick={() => setActive(false)}>
            <div className={ active ? "modal__content active" : "modal__content inactive"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default Modal;