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
            <Label>{formLabel}</Label>
            <Label>آیا مطمعن هستید؟</Label>
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
