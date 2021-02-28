import React, { useState } from "react";
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
  FormGroup
} from "reactstrap";

const ChooseOwner = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          unitId: null,
          ownerName: null,
          from: null,
          to: null,
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event) => {
    const newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
    console.log(formData);
  };

  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>انتخاب مالک فعلی واحد</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form">
          <input name="expenseId" value={formData.unitId} hidden/>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>مالک این واحد را انتخاب کنید</small>
                </div>
                <InputGroup>
                  <Input
                    name="OwnerName"
                    placeholder="نام مالک"
                    type="text"
                    value={formData.ownerName}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            <FormGroup>
              <Row>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ پایان مالکیت</small>
                  </div>
                  <Input
                    type="date"
                    name="from"
                    id="from"
                    value={formData.from}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ شروع مالکیت</small>
                  </div>
                  <Input
                    type="date"
                    name="to"
                    id="to"
                    value={formData.to}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </FormGroup>

          </Form>
        </CardBody>  
                  <Button color="secondary" className="mt-4">
              اضافه کردن
            </Button>
      </Card>
    </>
  );
};

export default ChooseOwner;
