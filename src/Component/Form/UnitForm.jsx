import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { GetData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";

const formDataTemplate = {
  unitId: null,
  unitNumber: null,
  area: null,
  ownerName: null,
  tenantName: null,
  ownerFrom: null,
  ownerTo: null,
  tenantFrom: null,
  tenantTo: null,
};
const UnitForm = ({ url = "BaseInfo/Expense", data, mode, onSuccess }) => {
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });
  // const prepareFormConstants = async () => {
  //   if (mode == formMode.edit) {
  //     const { data: unit } = await GetData(url + `/${data}`);
  //     unit.ownerFrom = NetDatetime(unit.ownerFrom);
  //     unit.ownerTo = NetDatetime(unit.ownerTo);
  //     unit.tenantFrom = NetDatetime(unit.tenantFrom);
  //     unit.tenantTo = NetDatetime(unit.tenantTo);
  //     setFormData(unit);
  //   }
  // };
  // useEffect(prepareFormConstants, []);
  const formLabel = generateText(mode);
  return (
    <Card className=" border-0">
      <CardHeader className="bg-transparent">
        <div className="text-muted text-center">
          <Label>{formLabel} واحد </Label>
        </div>
      </CardHeader>
      <CardBody>
        <Form role="form">
          <input name="expenseId" value={formData.unitId} hidden />
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>شماره واحد:</small>
                </div>
                <InputGroup>
                  <Input
                    name="unitNum"
                    placeholder="شماره واحد"
                    min={1}
                    max={100}
                    type="number"
                    step="1"
                    value={formData.unitNum}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>متراژ:</small>
                </div>
                <InputGroup>
                  <Input
                    name="area"
                    placeholder="متراژ"
                    min={20}
                    type="number"
                    step="5"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xl="6" md="4" sm="3">
              <div className="text-right text-muted">
                <small>نام مالک:</small>
              </div>
              <InputGroup>
                <Input
                  name="ownerName"
                  placeholder="مالک را انتخاب کنید"
                  type="text"
                  value={formData.ownerName}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>تاریخ شروع بازه مالکیت:</small>
                </div>
                <Input
                  type="date"
                  name="ownerFrom"
                  value={formData.ownerFrom}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>تاریخ پایان بازه مالکیت:</small>
                </div>
                <Input
                  type="date"
                  name="ownerTo"
                  value={formData.ownerTo}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <Row>
          <Label check className="text-right text-muted rtl float-right">
            <Input type="checkbox" className="pr-3" /> ساکن و مالک واحد دو فرد
            مختلف هستند.
          </Label>
          </Row>
          <Row>
            <Col xl="6" md="4" sm="3">
              <div className="text-right text-muted">
                <small>نام ساکن:</small>
              </div>
              <InputGroup>
                <Input
                  name="tenantName"
                  placeholder="ساکن را انتخاب کنید"
                  type="text"
                  value={formData.tenantName}
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>تاریخ شروع بازه سکونت:</small>
                </div>
                <Input
                  type="date"
                  name="tenantFrom"
                  value={formData.tenantFrom}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>تاریخ پایان بازه سکونت:</small>
                </div>
                <Input
                  type="date"
                  name="tenantTo"
                  value={formData.tenantTo}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <Button color="secondary" className="mt-2">
            اضافه کردن
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UnitForm;
