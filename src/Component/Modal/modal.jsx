import React, { Children, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AModal = ({ titleLabel, buttonLabel, children, className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{titleLabel}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default AModal;
