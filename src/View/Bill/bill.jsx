import { useEffect, useState } from "react";
import CostForm from "../../Component/Form/CostForm";
import CostCategoryForm from "../../Component/Form/CostCategoryForm";
import ATable from "../../Component/Table/Table";
import { GetData } from "../../Services/ApiServices";
import formMode from "../../Component/Form/FormConfig";
import { NetDatetime } from "../../Utility/NETUtility";
import useModal from "../../Component/Modal/UseModal";
import { Button, Card, Container } from "reactstrap";
import FormModal from "../../Component/Modal/FormModal";
import DeleteForm from "../../Component/Form/DeleteForm";
import PageVariable from "../../variable";
import BillForm from "../../Component/Form/BillForm";
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
const Bills = () => {
  const [costs, setCosts] = useState([]);

  return (
    <ATable
      tableTitle="صورتحساب"
      rows={costs.map((c) => new BillInfo(c))}
      headers={headerTitle}
    ></ATable>
  );
};

export default Bills;
