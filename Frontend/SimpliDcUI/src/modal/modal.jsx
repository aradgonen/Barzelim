import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./modalContext";
import { Modal } from 'react-bootstrap'
const UniversalModal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <>
      <Modal show={() => handleModal()} onHide={() => handleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
      </Modal>
    </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default UniversalModal;