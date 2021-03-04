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
import { GetData, PostData, PutData } from "../../Services/ApiServices";
import { GetPersons } from "../../Services/FormServices/UnitService";
import { ReadBuidling } from "../../Services/StorageServces/LocalStorageService";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import PageVariable from "../../variable";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";

const formDataTemplate = {
  apartmentId: null,
  number: null,
  area: null,
  occupantCount: null,
  onwerId: null,
  tenantId: null,
  ownerFrom: null,
  ownerTo: null,
  tenantFrom: null,
  tenantTo: null,
};

const UnitForm = ({ url = "BaseInfo/Apartment", data, mode, onSuccess }) => {
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

  const unitHandleSubmit = async (e) => {
    e.preventDefault();
    if (mode === formMode.add) {
      const apartmentForm = {
        area: formData.area,
        number: formData.number,
        buildingId: +ReadBuidling(),
      };

      const apartment = await PostData("BaseInfo/Apartment", apartmentForm);

      var ownerForm = {
        from: formData.ownerFrom,
        to: formData.ownerTo,
        isOwner: true,
        personId: formData.ownerId,
        apartmentId: apartment.apartmentId,
      };

      await PostData("BaseInfo/Person/AddToUnit", ownerForm);

      if (isOpen) {
        var tenantForm = {
          from: formData.tenantFrom,
          to: formData.tenantTo,
          isOwner: false,
          occupantCount: formData.occupantCount,
          personId: formData.tnantId,
          apartmentId: apartment.apartmentId,
        };

        await PostData("BaseInfo/Person/AddToUnit", tenantForm);
      }
    }

    if (mode === formMode.edit) {
      debugger;

      var ownerForm = {
        from: formData.ownerFrom,
        to: formData.ownerTo,
        personId: formData.ownerId,
        isOwner: true,
        apartmentId: formData.apartmentId,
      };

      await PutData("BaseInfo/Person/EditOwnerTenant", ownerForm);

      if (isOpen) {
        var tenantForm = {
          apartmentId: formData.apartmentId,
          from: formData.tenantFrom,
          to: formData.tenantTo,
          isOwner: false,
          personId: formData.tenantId,
          occupantCount: formData.occupantCount,
        };

        await PutData("BaseInfo/Person/EditOwnerTenant", tenantForm);
      }
    }
  };

  const prepareFormConstants = async () => {
    if (mode == formMode.edit) {
      debugger;

      const unitForm = { ...formData };
      const unit = await GetData("BaseInfo/Apartment/Tenant" + `/${data}`);

      unitForm.apartmentId = unit.apartment.apartmentId;
      unitForm.area = unit.apartment.area;
      unitForm.number = unit.apartment.number;
      if (unit.owner) {
        unitForm.ownerFrom = NetDatetime(unit.owner.from);
        unitForm.ownerTo = NetDatetime(unit.owner.to);
        unitForm.ownerId = unit.owner.personId;
      }
      if (unit.tenant) {
        unitForm.occupantCount = unit.tenant.occupantCount;
        unitForm.tenantFrom = NetDatetime(unit.tenant.from);
        unitForm.tenantTo = NetDatetime(unit.tenant.to);
        unitForm.tenantId = unit.tenant.personId;
      }
      setFormData(unitForm);
    }
  };

  useEffect(prepareFormConstants, []);
  const formLabel = generateText(mode);
  const [persons, setPersons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(async () => setPersons(await GetPersons()), []);
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
        <Form role="form" onSubmit={unitHandleSubmit}>
          <input name="apartmentId" value={formData.apartmentId} hidden />
          <FormGroup>
            <Row>
              <Col>
                <div className="text-right text-muted">
                  <small>{PageVariable.UnitForm.unitNumber.headerTitle}</small>
                </div>
                <InputGroup>
                  <Input
                    name="number"
                    placeholder={PageVariable.UnitForm.unitNumber.placeholder}
                    min={1}
                    max={100}
                    type="number"
                    step="1"
                    value={formData.number}
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
              <Input
                type="select"
                name="ownerId"
                value={formData.ownerId}
                onChange={handleChange}
              >
                {persons.map((c) => (
                  <option value={c.personId}>
                    {c.name + " " + c.lastName}
                  </option>
                ))}
              </Input>
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
                      name="occupantCount"
                      placeholder={
                        PageVariable.UnitForm.occupantcount.placeholder
                      }
                      min={1}
                      type="number"
                      step="1"
                      value={formData.occupantCount}
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
