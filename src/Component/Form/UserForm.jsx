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
import { GetData } from "../../Services/ApiServices";
function PostUnit() {
  return axios.post();
}

async function GetUnit() {
  return await GetData("baseinfo/building");
}

const UserForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(
    data
      ? data
      : {
          userId: null,
          UserName: null,
          PhoneNum: null,
        }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
                  <small>نام و نام خانوادگی:</small>
                </div>
                <Input
                  type="text"
                  name="UserName"
                  id="UserName"
                  placeholder="نام"
                  value={formData.UserName}
                  onChange={handleChange}
                />
              </Col>
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

export default UserForm;
