import React from "react";
// reactstrap components
import {
  CustomInput,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
} from "reactstrap";

const AddUnitForm = () => {
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
                    placeholder="شماره واحد"
                    min={1}
                    max={100}
                    type="number"
                    step="1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>متراژ:</small>
                </div>
                <InputGroup>
                  <Input placeholder="متراژ" min={20} type="number" step="5" />
                </InputGroup>
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>تعداد ساکنین:</small>
                </div>
                <InputGroup>
                  <Input
                    placeholder="تعداد ساکنین"
                    min={1}
                    type="number"
                    step="1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="item-center ">
              <Col className="ml-4">
                <div className="text-right text-muted">
                  <small>نام ساکن:</small>
                </div>
                <Input
                  className="mr-0 "
                  type="text"
                  name="tenentName"
                  id="tenentName"
                  placeholder="نام ساکن"
                />
              </Col>
              <Col className="ml-4">
                <div className="text-right mr-4 text-muted">
                  <small>نام مالک:</small>
                </div>
                <Input
                  className="mr-4"
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  placeholder="نام مالک"
                />
              </Col>
            </Row>
            <FormGroup>
              <Row>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ شروع مالکیت:</small>
                    <Input type="date" name="tenentName" id="tenentName" />
                  </div>
                </Col>
                <Col>
                  <div className="text-right text-muted">
                    <small>تاریخ پایان مالکیت:</small>
                    <Input type="date" name="ownerName" id="ownerName" />
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

export default AddUnitForm;
