import { useState } from "react";
import { Form } from "reactstrap";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import useFormData from "../../Component/Form/UseFormData";
import { ReadBuidling } from "../../Services/StorageServces/LocalStorageService";
import generateText from "../../Utility/FormButtonGenerator";
const formDataTemplate = {
  buildingId: +ReadBuidling(),
  from: null,
  to: null,
};
const CalculateForm = ({
  url = "Charge/Calculation",
  data,
  mode,
  onSuccess,
}) => {
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

  const formLabel = generateText(mode);
  return (
    <>
      <CardHeader className="bg-transparent">
        <div className="text-muted text-center">
          <Label>بازه‌ی مورد نظر را جهت محاسبه شارژ انتخاب کنید.</Label>
        </div>
      </CardHeader>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row className="d-flex justify-content-center mt-3">
            <Col>
              <div className="text-right text-muted">
                <small>تاریخ شروع محاسبه </small>
              </div>
              <Input
                type="date"
                name="from"
                value={FormData.from}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <div className="text-right text-muted">
                <small>تاریخ پایان محاسبه </small>
              </div>
              <Input
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Button color="primary" className="mt-3">
            محاسبه‌ی شارژ
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
export default CalculateForm;
