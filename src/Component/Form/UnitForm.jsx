import React, { useEffect, useState } from "react";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { GetData } from "../../Services/ApiServices";
import { GetPersons } from "../../Services/FormServices/UnitService";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import PageVariable from "../../variable";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";

const formDataTemplate = {
  unitId: null,
  unitNumber: null,
  area: null,
  occupantcount: null,
  personId: null,
  tenantId: null,
  ownerFrom: null,
  ownerTo: null,
  tenantFrom: null,
  tenantTo: null,
};
const UnitForm = ({ url = "BaseInfo/Expense", data, mode, onSuccess }) => {
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });
  const prepareFormConstants = async () => {
    if (mode == formMode.edit) {
      const { data: unit } = await GetData(url + `/${data}`);
      unit.ownerFrom = NetDatetime(unit.from);
      unit.ownerTo = NetDatetime(unit.to);
      unit.tenantFrom = NetDatetime(unit.tenantFrom);
      unit.tenantTo = NetDatetime(unit.tenantTo);
      setFormData(unit);
    }
  };
  useEffect(prepareFormConstants, []);
  const formLabel = generateText(mode);
  const [persons, setPersons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(async () => {
    let personData = await GetPersons();
    setPersons(personData.data);
  }, []);
  return (
    <Card className=" border-0">
      <CardHeader className="bg-transparent">
        <div className="text-muted text-center">
          <Label>
            {formLabel} {PageVariable.UnitForm.unit}
          </Label>
        </div>
      </CardHeader>
      <CardBody>
        <Form role="form" onSubmit={handleSubmit}>
          <input name="expenseId" value={formData.unitId} hidden />
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>{PageVariable.UnitForm.unitNumber.headerTitle}</small>
                </div>
                <InputGroup>
                  <Input
                    name="unitNumber"
                    placeholder={PageVariable.UnitForm.unitNumber.placeholder}
                    min={1}
                    max={100}
                    type="number"
                    step="1"
                    value={formData.unitNumber}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>{PageVariable.UnitForm.area.headerTitle}</small>
                </div>
                <InputGroup>
                  <Input
                    name="area"
                    placeholder={PageVariable.UnitForm.area.placeholder}
                    min={20}
                    type="number"
                    step="5"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xl="6" md="4" sm="3">
              <div className="text-right text-muted">
                <small>{PageVariable.UnitForm.ownerName.headerTitle}</small>
              </div>
              <InputGroup>
                <Input
                  type="select"
                  name="personId"
                  value={formData.personId}
                  onChange={handleChange}
                >
                  {persons.map((c) => (
                    <option value={c.personId}>
                      {c.name + " " + c.lastName}
                    </option>
                  ))}
                </Input>
              </InputGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>{PageVariable.UnitForm.ownerLiveDate.fromTitle}</small>
                </div>
                <Input
                  type="date"
                  name="ownerFrom"
                  value={formData.ownerFrom}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <div className="text-right text-muted">
                  <small>{PageVariable.UnitForm.ownerLiveDate.toTitle}</small>
                </div>
                <Input
                  type="date"
                  name="ownerTo"
                  value={formData.ownerTo}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </FormGroup>

          <div>
            <Row>
              <Col sm="1">
                <Input id="acardion" type="checkbox" onClick={toggle} />
              </Col>
              <Col sm="11" className="text-right">
                <Label check className="text-right text-muted" for="acardion">
                  {PageVariable.UnitForm.checkboxTitle}
                </Label>
              </Col>
            </Row>
            <Collapse isOpen={isOpen}>
              <Row>
                <Col xl="6" md="4" sm="3">
                  <div className="text-right text-muted">
                    <small>
                      {PageVariable.UnitForm.tenantName.headerTitle}
                    </small>
                  </div>
                  <InputGroup>
                    <Input
                      type="select"
                      name="tenantId"
                      value={formData.tenantId}
                      onChange={handleChange}
                    >
                      {persons.map((c) => (
                        <option value={c.personId}>
                          {c.name + " " + c.lastName}
                        </option>
                      ))}
                    </Input>
                  </InputGroup>
                </Col>
                <Col>
                  <div className="text-right text-muted">
                    <small>
                      {PageVariable.UnitForm.occupantcount.headerTitle}
                    </small>
                  </div>
                  <InputGroup>
                    <Input
                      name="occupantcount"
                      placeholder={
                        PageVariable.UnitForm.occupantcount.placeholder
                      }
                      min={1}
                      type="number"
                      step="1"
                      value={formData.a}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <FormGroup>
                <Row>
                  <Col>
                    <div className="text-right text-muted">
                      <small>
                        {PageVariable.UnitForm.tenantLiveDate.fromTitle}
                      </small>
                    </div>
                    <Input
                      type="date"
                      name="tenantFrom"
                      value={formData.tenantFrom}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <div className="text-right text-muted">
                      <small>
                        {PageVariable.UnitForm.tenantLiveDate.toTitle}
                      </small>
                    </div>
                    <Input
                      type="date"
                      name="tenantTo"
                      value={formData.tenantTo}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Collapse>
          </div>

          <Button color="secondary" className="mt-2">
            {PageVariable.UnitForm.addButton}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UnitForm;
