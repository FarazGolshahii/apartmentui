import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const UnControlledModal = ({
  modal,
  toggle,
  titleLabel,
  children,
  className,
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{titleLabel}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default UnControlledModal;
