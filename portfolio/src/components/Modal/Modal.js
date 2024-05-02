import React, { useState } from 'react';
import './Modal.scss'; // Assurez-vous de créer un fichier Modal.css pour le style de votre modal

const Modal = ({description}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        <div className='Open_modal' onClick={openModal}>Description</div>
        {isOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {description}
            </div>
          </div>
        )}
      </div>
    );
};
  
export default Modal;
