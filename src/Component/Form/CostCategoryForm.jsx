import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";

const formDataTemplate = {
  expenseCategoryId: null,
  expensCategoryName: null,
  formulaType: null,
};

const CostCategoryForm = ({ onSuccess }) => {
  const [formData, handleChange, handleSubmit] = useFormData({
    mode: formMode.add,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url: "baseInfo/expense/category",
  });

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
            <input
              name="expenseCategoryId"
              value={formData.expenseCategoryId}
              hidden
            />
            <Row>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>نام هزینه:</small>
                  </div>
                  <Input
                    type="text"
                    name="expensCategoryName"
                    placeholder="نام گروه هزینه"
                    value={formData.expensCategoryName}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>نحوه محاسبه هزینه:</small>
                  </div>
                  <Input
                    type="select"
                    name="formulaType"
                    value={formData.formulaType}
                    onChange={handleChange}
                  >
                    <option>نحوه محاسبه</option>
                    <option value={1}>بر اساس متراژ</option>
                    <option value={2}>بر اساس نفرات</option>
                    <option value={3}>بر اساس متراژ و نفرات</option>
                    <option value={0}>بر اساس مقدار ثابت</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" className="mt-2">
              اضافه کردن
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CostCategoryForm;
