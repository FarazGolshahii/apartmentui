import React from "react";
import UnControlledModal from "./UncontrolledModal";

const FormModal = ({ Form, toggle, data, mode, url }) => {
  return (
    <div>
      <UnControlledModal toggle={toggle} modal={data.isActive}>
        <Form onSuccess={toggle} data={data.data} mode={mode} url={url} />
      </UnControlledModal>
    </div>
  );
};

export default FormModal;
