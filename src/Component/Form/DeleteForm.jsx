import React from "react";

import { Card, CardHeader, CardBody, Form, Label, Button } from "reactstrap";
import { DeleteData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import formMode from "./FormConfig";

const DeleteForm = ({ url, data, onSuccess }) => {
  const formLabel = generateText(formMode.delete);

  const handleDelete = async (e) => {
    e.preventDefault();
    await DeleteData(url + `/${data}`);
    onSuccess();
  };

  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
<<<<<<< HEAD
            <Label>آیااز {formLabel} مطمعن هستید؟</Label>
=======
            <Label>{formLabel}</Label>
            <Label>آیا مطمعن هستید؟</Label>
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form" onSubmit={handleDelete}>
            <Button color="secondary" className="mt-2">
              {formLabel}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default DeleteForm;
