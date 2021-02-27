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
import { GetData } from "../../Services/ApiServices";

function PostUnit() {
  return axios.post();
}

async function GetUnit() {
  return await GetData("baseinfo/building");
}

const EditUnitForm = () => {
  const [building, setBuilding] = useState([]);

  const [formData, setFormData] = useState({
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
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
            <Label>ایجاد واحد جدید</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form">
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
              <Col>
                <div className="text-right text-muted">
                  <small>تعداد ساکنین:</small>
                </div>
                <InputGroup>
                  <Input
                    name="tenentNum"
                    placeholder="تعداد ساکنین"
                    min={1}
                    type="number"
                    step="1"
                    value={formData.tenentNum}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام ساکن:</small>
                </div>
                <Input
                  type="text"
                  name="tenentName"
                  id="tenentName"
                  placeholder="نام ساکن"
                  value={formData.tenentName}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right mr-4 text-muted">
                  <small>نام مالک:</small>
                </div>
                <Input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  placeholder="نام مالک"
                  value={formData.ownerName}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <FormGroup>
              <Row>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ شروع مالکیت:</small>
                    <Input
                      type="date"
                      name="from"
                      id="from"
                      value={formData.from}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ پایان مالکیت:</small>
                    <Input
                      type="date"
                      name="to"
                      id="to"
                      value={formData.to}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default EditUnitForm;
