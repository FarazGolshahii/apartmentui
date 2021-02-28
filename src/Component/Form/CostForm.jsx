import React, { useEffect, useState } from "react";
import { GetData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";
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


const formDataTemplate = {
  expenseId: null,
  title: null,
  expenseCategoryId: null,
  amount: null,
  from: null,
  to: null,
};

const CostForm = ({ url = "BaseInfo/Expense", data, mode, onSuccess }) => {
  const [categories, setCategories] = useState([]);
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

  const prepareFormConstants = async () => {
    let { data: categoryList } = await GetData("Baseinfo/Expense/Category");
    setCategories(categoryList);
    const newFormData = { ...formData };
    newFormData.expenseCategoryId = categoryList[0]
      ? categoryList[0].expensCategoryId
      : null;
    setFormData(newFormData);

    if (mode == formMode.edit) {
      const { data: cost } = await GetData(url + `/${data}`);
      cost.from = NetDatetime(cost.from);
      cost.to = NetDatetime(cost.to);
      setFormData(cost);
    }
  };

  useEffect(prepareFormConstants, []);
  const formLabel = generateText(mode);
  return (
    <>
      <Card className=" border-0">
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>{formLabel} هزینه</Label>
          </div>
        </CardHeader>
        <CardBody>
          <Form role="form" onSubmit={handleSubmit}>
            <input name="expenseId" value={formData.expenseId} hidden />
            <Row className="item-center ">
              <Col>
                <div className="text-right text-muted">
                  <small>نام هزینه:</small>
                </div>
                <Input
                  type="text"
                  name="title"
                  placeholder="نام هزینه"
                  value={formData.title}
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
                  name="amount"
                  step="10000"
                  placeholder="مبلغ (ریال)"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <FormGroup>
                  <div className="text-right text-muted">
                    <small>گروه هزینه:</small>
                  </div>
                  <Input
                    type="select"
                    name="expenseCategoryId"
                    value={formData.expenseCategoryId}
                    onChange={handleChange}
                  >
                    {categories.map((c) => (
                      <option value={c.expensCategoryId}>
                        {c.expensCategoryName}
                      </option>
                    ))}
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
            <Button color="secondary" className="mt-2">
              {formLabel}
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default CostForm;
