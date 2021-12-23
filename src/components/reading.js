import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Square from "../components/square"


function Reading() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Button variant="outline-primary" onClick={() => setShow(true)}>
        BOOK YOUR SESH⟿
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop={false}
        dialogClassName="reading-d"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="justify-content-center">
          <Square></Square>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Reading;