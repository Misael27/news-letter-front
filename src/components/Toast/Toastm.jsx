import React from 'react';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const Toastm = ({title, message, show, setShow, bg=''}) => {
  return (
    <Row>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} bg={bg} autohide>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </Row>
  );
}

export default Toastm;