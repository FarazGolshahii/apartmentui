import { useEffect, useState } from "react";
import CostForm from "../../Component/Form/CostForm";
import CostCategoryForm from "../../Component/Form/CostCategoryForm";
import ATable from "../../Component/Table/Table";
import { GetData } from "../../Services/ApiServices";
import formMode from "../../Component/Form/FormConfig";
import { NetDatetime } from "../../Utility/NETUtility";

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
    return NetDatetime(this.fromDate) + " تا " + NetDatetime(this.toDate);
  }
}
const Bills = () => {
  const [costs, setCosts] = useState([]);
  useEffect(async () => {
    const { data: costs } = await GetData("Charge/Calculation");
    setCosts(costs);
  }, []);
  return (
    <ATable
      tableTitle="صورتحساب"
      rows={costs.map((c) => new BillInfo(c))}
      headers={headerTitle}
    ></ATable>
  );
};

export default Bills;
