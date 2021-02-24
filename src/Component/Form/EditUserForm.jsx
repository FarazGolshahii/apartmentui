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

async function GetUnit() {
  return await axios.get(BaseAPIUrl + "baseinfo/building");
}

const EditUserForm = () => {
  const [building, setBuilding] = useState([]);

  const [formData, setFormData] = useState({
    UserName: "احمد اکبری",
    PhoneNum: "09126753456",
    from: "1398/1/1",
    to: "1399/1/1",
  });

  const handleChange = (event) => {
    const newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
    console.log(formData);
  };

  useEffect(async () => {
    let unit = await GetUnit();
    console.log(unit);

    setBuilding(unit);
  }, []);

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
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default EditUserForm;
