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
                />
              </Col>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>نحوه محاسبه هزینه:</small>
                  </div>
                  <Input type="select" name="formul" id="formul">
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
                  <Input type="date" name="from" id="from" />
                </Col>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ پایان بازه پرداخت:</small>
                  </div>
                  <Input type="date" name="to" id="to" />
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
