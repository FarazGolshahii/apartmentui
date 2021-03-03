import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import {
  Card,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Progress,
  Spinner,
  Table,
} from "reactstrap";
import { GetData } from "../../Services/ApiServices";
import generateText from "../../Utility/FormButtonGenerator";
import { NetDatetime } from "../../Utility/NETUtility";
import PageVariable from "../../variable";
import ATable from "../Table/Table";
import formMode from "./FormConfig";
import useFormData from "./UseFormData";
const headerTitle = [
  {
    title: "شماره واحد",
    field: "apartmentNumber",
  },
  {
    title: "نام و نام خانوادگی پرداخت کننده",
    field: "fullName",
  },
  {
    title: "مجموع مبالغ",
    field: "totalCharge",
  },
  {
    title: "بازه ی زمانی مشخص شده",
    field: "liveDate",
  },
];
const formDataTemplate = {
  apartmentNumber: null,
  fullName: null,
  totalCharge: null,
  from: null,
  to: null,
};
class BillInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get liveDate() {
    return NetDatetime(this.from) + " تا " + NetDatetime(this.to);
  }
}
const BillForm = ({ url, data, mode, onSuccess }) => {
  const [bills, setBills] = useState([]);
  const [formData, handleChange, handleSubmit, setFormData] = useFormData({
    mode: mode,
    data: formDataTemplate,
    onSuccess: onSuccess,
    url,
  });

  const formLabel = generateText(mode);
  return (
    <Container>
      <Card>
        <CardHeader className="bg-transparent">
          <div className="text-muted text-center">
            <Label>بازه‌ی مورد نظر را جهت محاسبه شارژ انتخاب کنید.</Label>
          </div>
        </CardHeader>
        <FormGroup>
          <Row className="d-flex justify-content-center">
            <Col xl="4">
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
            <Col xl="4">
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
          <Row>
            <Col className="d-flex justify-content-center">
              <Button color="primary" className="mt-3">
                محاسبه‌ی شارژ
              </Button>
            </Col>
          </Row>
          <ATable
            rows={bills.map((c) => new BillInfo(c))}
            headers={headerTitle}
          ></ATable>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button color="danger" className="mt-3">
                پرداخت
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Card>
    </Container>
  );
};
export default BillForm;
