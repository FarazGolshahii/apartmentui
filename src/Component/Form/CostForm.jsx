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
  Button
} from "reactstrap";
import BaseAPIUrl from "../../View/APIConfig";



const CostForm = ({ data, onSubmit }) => {
  
  
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          expenseId: null,
          title: null,
          expenseCategoryId: null,
          price: null,
          from: null,
          to: null,
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

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
            <Label>ایجاد هزینه جدید</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form" onSubmit={handleSubmit}>
            <input name="expenseId" value={formData.expenseId} hidden/>
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام هزینه:</small>
                </div>
                <Input
                  type="text"
                  name="title"
                  placeholder="نام هزینه"
                  value={formData.title}
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
                  name="price"
                  step="10000"
                  placeholder="مبلغ (ریال)"
                  value={formData.price}
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
                    name="expenseCategoryId"
                    value={formData.expenseCategoryId}
                    onChange={handleChange}
                  >
                    <option>نحوه محاسبه</option>
                    <option value="1">بر اساس متراژ</option>
                    <option value="2">بر اساس نفرات</option>
                    <option value="3">بر اساس متراژ و نفرات</option>
                    <option value="0">بر اساس مقدار ثابت</option>
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
            <Button color="secondary" className="mt-2">
              اضافه کردن
          </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CostForm;
