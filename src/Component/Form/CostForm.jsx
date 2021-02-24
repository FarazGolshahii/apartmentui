import React, { useEffect, useState } from "react";
import axios from "axios";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  Label,
} from "reactstrap";
import BaseAPIUrl from "../../View/APIConfig";

function PostUnit() {
  return axios.post();
}

const CostForm = ({ data }) => {
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          costName: null,
          cost: null,
          formul: null,
          from: null,
          to: null,
        }
  );

  const handleChange = (event) => {
    const newData = { ...formData };
    debugger;
    newData[event.target.name] = event.target.value;
    setFormData(newData);
    console.log(formData);
  };

  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>ایجاد هزینه جدید</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form">
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام هزینه:</small>
                </div>
                <Input
                  type="text"
                  name="costName"
                  id="costName"
                  placeholder="نام هزینه"
                  value={formData.costName}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>مبلغ:</small>
                </div>
                <Input
                  type="number"
                  name="cost"
                  id="cost"
                  step="10000"
                  placeholder="مبلغ (ریال)"
                  value={formData.cost}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>نحوه محاسبه هزینه:</small>
                  </div>
                  <Input
                    type="select"
                    name="formul"
                    id="formul"
                    value={formData.formul}
                    onChange={handleChange}
                  >
                    <option>نحوه محاسبه</option>
                    <option value="1">بر اساس متراژ</option>
                    <option value="2">بر اساس نفرات</option>
                    <option value="3">بر اساس متراژ و نفرات</option>
                    <option value="4">بر اساس مقدار ثابت</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Row>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ شروع بازه پرداخت:</small>
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
                    <small>تاریخ پایان بازه پرداخت:</small>
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
      </Card>
    </>
  );
};

export default CostForm;
