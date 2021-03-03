import React, { useEffect, useState } from "react";
import generateText from "../../Utility/FormButtonGenerator";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import {
  ReadBuidling,
  WriteBuilding,
} from "../../Services/StorageServces/LocalStorageService";
import { GetData } from "../../Services/ApiServices";

const formInputNames = {
  buildingId: "buildingId",
  name: "name",
  apartmentCount: "apartmentCount",
};

const formDataTemplate = {
  buildingId: null,
  name: null,
  apartmentCount: null,
};

const BuildingForm = ({ url = "BaseInfo/Building", mode, onSuccess }) => {
  const handleSuccess = (data) => {
    WriteBuilding(+data.buildingId);
    onSuccess();
  };

  const validator = (name, value) => {
    if (name === formInputNames.apartmentCount) return value >= 2;
    if (name === formInputNames.name) return value !== "";
    return true;
  };

  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: mode == formMode.add ? handleSuccess : onSuccess,
    url,
    validator,
  });
  useEffect(async () => {
    if (mode === formMode.edit) {
      const buildings = await GetData("BaseInfo/Building");
      setFormData(buildings.find((b) => b.buildingId === +ReadBuidling()));
    }
  }, []);

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
            <input
              name={formInputNames.buildingId}
              value={formData.buildingId}
              hidden
            />
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام ساختمان:</small>
                </div>
                <Input
                  type="text"
                  name={formInputNames.name}
                  placeholder="نام ساختمان"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>تعداد واحدها:</small>
                </div>
                <Input
                  disabled={mode === formMode.edit}
                  type="number"
                  name={formInputNames.apartmentCount}
                  step="1"
                  min="2"
                  placeholder="تعداد واحدها"
                  value={formData.apartmentCount}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Button color="secondary" className="mt-3">
              {formLabel}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default BuildingForm;
