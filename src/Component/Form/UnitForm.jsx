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
} from "reactstrap";

const UnitForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          unitId: null,
          unitNum: null,
          area: null,
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
            <Label>ایجاد واحد جدید</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form">
            <input name="expenseId" value={formData.unitId} hidden />
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
            <Button color="secondary" className="mt-4">
              اضافه کردن
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default UnitForm;
