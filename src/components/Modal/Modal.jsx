import { GuestsButton } from '../Buttons/GuestsButton';
import { SearchButton } from '../Buttons/SearchButton';
import './Modal.css'


export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-buttons-container">
            {children}
            <GuestsButton />
            <SearchButton onClick={onClose} />
          </div>
        </div>
      </div>
    );
  };
