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
  ButtonDropdown,
  Button,
} from "reactstrap";
import BaseAPIUrl from "../../View/APIConfig";

function PostUnit() {
  return axios.post();
}

async function GetUnit() {
  return await axios.get(BaseAPIUrl + "baseinfo/building");
}

const UserForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          userId: null,
          Name: null,
          LastName: null,
          PhoneNumber: null,
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
            <Label>ایجاد عضو جدید</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form">
            <input name="expenseId" value={formData.userId} hidden />
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام:</small>
                </div>
                <Input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="نام"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>نام خانوادگی:</small>
                </div>
                <Input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="نام خانوادگی"
                  value={formData.LastName}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Col>
              <div className="text-right text-muted">
                <small>شماره تماس:</small>
              </div>
              <Input
                type="text"
                name="PhoneNum"
                id="PhoneNum"
                placeholder="شماره"
                value={formData.PhoneNum}
                onChange={handleChange}
              />
            </Col>
          </Form>
        </CardBody>
        <Col className="item-center">
          <Button color="secondary" className="mt-4">
            اضافه کردن
          </Button>
        </Col>
      </Card>
    </>
  );
};

export default UserForm;
