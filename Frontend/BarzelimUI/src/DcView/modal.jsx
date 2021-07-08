import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./modalContext";
import { Modal,Button } from 'react-bootstrap'
const UniversalModal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <>
      {/* <Button variant="primary" onClick={() => handleModal()}>
        Launch demo modal
      </Button> */}

      <Modal show={() => handleModal()} onHide={() => handleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleModal()}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default UniversalModal;