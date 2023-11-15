import "./Modal.scss";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({
  children,
  isOpen,
  shouldBeClosedOnOutsideClick,
  handleOnClose,
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    const { current: modal } = modalRef;
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;
    const handleCancel = (event) => {
      event.preventDefault();
      handleOnClose();
    };

    modal.addEventListener("cancel", handleCancel);
    return () => {
      modal.removeEventListener("cancel", handleCancel);
    };
  }, [handleOnClose]);

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;
    if (shouldBeClosedOnOutsideClick && target === current) {
      handleOnClose();
    }
  };

  return createPortal(
    <dialog ref={modalRef} className="modal" onClick={handleOutsideClick}>
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
