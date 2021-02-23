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

const AddCostForm = () => {
  const [building, setBuilding] = useState([]);

  const [formData, setFormData] = useState({
    costName: "قبض آب",
    cost: 2000000,
    formul: "بر اساس متراژ",
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
    let cost = await GetUnit();
    console.log(cost);

    setBuilding(cost);
  }, []);

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
                  placeholder="مبلغ"
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
                    onChange={handleChange}
                  >
                    <option>نحوه محاسبه</option>
                    <option value={formData.formul}>بر اساس متراژ</option>
                    <option value={formData.formul}>بر اساس نفرات</option>
                    <option value={formData.formul}>
                      بر اساس متراژ و نفرات
                    </option>
                    <option value={formData.formul}>بر اساس مقدار ثابت</option>
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

export default AddCostForm;
