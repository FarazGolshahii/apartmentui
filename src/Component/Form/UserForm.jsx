import React, { useEffect, useState } from "react";
import { GetData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";
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
<<<<<<< HEAD


const formDataTemplate = {
  userId: null,
  Name: null,
  LastName: null,
  PhoneNumber: null,
};

const UserForm = ({ url = "BaseInfo/Expense", data, mode, onSuccess }) => {
=======
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
          Name: null,
          LastName: null,
          PhoneNumber: null,
        }
  );
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e

  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

<<<<<<< HEAD
=======
  const handleChange = (e) => {};
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e

  const formLabel = generateText(mode);
  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>{formLabel} عضو</Label>
          </div>
        </CardHeader>
        <CardBody>
<<<<<<< HEAD
          <Form role="form" onSubmit={handleSubmit}>
=======
          <Form role="form">
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
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
<<<<<<< HEAD
            <Button color="secondary" className="mt-3">
              {formLabel}
            </Button>
=======
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
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
