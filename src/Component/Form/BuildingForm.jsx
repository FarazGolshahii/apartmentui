import React, { useEffect, useState } from "react";
import { GetData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";

const formDataTemplate = {
  BuildingId: null,
  Name: null,
  NumberOfUnits: null,
};

const BuildingForm = ({ url = "BaseInfo/Building", data, mode, onSuccess }) => {
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

  const formLabel = generateText(mode);
  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>{formLabel} ساختمان</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form" onSubmit={handleSubmit}>
            <input name="expenseId" value={formData.BuildingId} hidden />
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام ساختمان:</small>
                </div>
                <Input
                  type="text"
                  name="Name"
                  placeholder="نام"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>تعداد واحدها:</small>
                </div>
                <Input
                  type="number"
                  name="NumberOfUnits"
                  step="1"
                  min="2"
                  placeholder="تعداد"
                  value={formData.NumberOfUnits}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Button color="secondary" className="mt-2">
              {formLabel}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default BuildingForm;