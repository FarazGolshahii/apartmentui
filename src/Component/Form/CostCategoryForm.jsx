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
import PageVariable from "../../variable";
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
            <Label>{PageVariable.CostCategoryForm.headerTitle}</Label>
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
                    <small>
                      {PageVariable.CostCategoryForm.expensCategoryName}
                    </small>
                  </div>
                  <Input
                    type="text"
                    name="expensCategoryName"
                    placeholder={PageVariable.CostCategoryForm.placeholder}
                    value={formData.expensCategoryName}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>
                      {
                        PageVariable.CostCategoryForm.formulaType
                          .formulaTypeTitle
                      }
                    </small>
                  </div>
                  <Input
                    type="select"
                    name="formulaType"
                    value={formData.formulaType}
                    onChange={handleChange}
                  >
                    <option>
                      {PageVariable.CostCategoryForm.formulaType.formulaType}
                    </option>
                    <option value={1}>
                      {PageVariable.CostCategoryForm.formulaType.formulaType1}
                    </option>
                    <option value={2}>
                      {PageVariable.CostCategoryForm.formulaType.formulaType2}
                    </option>
                    <option value={3}>
                      {PageVariable.CostCategoryForm.formulaType.formulaType3}
                    </option>
                    <option value={0}>
                      {PageVariable.CostCategoryForm.formulaType.formulaType0}
                    </option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" className="mt-2">
              {PageVariable.CostCategoryForm.submitButton}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CostCategoryForm;
