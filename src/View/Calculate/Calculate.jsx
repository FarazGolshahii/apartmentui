import { useEffect, useState } from "react";
import CalculateForm from "../../Component/Form/CalculateForm";
import formMode from "../../Component/Form/FormConfig";
import FormModal from "../../Component/Modal/FormModal";
import useModal from "../../Component/Modal/UseModal";
import ATable from "../../Component/Table/Table";
import { NetDatetime } from "../../Utility/NETUtility";

import { Button } from "reactstrap";
import { GetData } from "../../Services/ApiServices";
const headerTitle = [
  {
    title: "بازه محاسبه شده",
    field: "liveDate",
  },
];

class CalculateInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get liveDate() {
    return this.from + " تا " + this.to;
  }
}
const Calculate = () => {
  const [calculate, setCalculate] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal(["add"]);

  useEffect(async () => {
    const { data: calculate } = await GetData("Charge/Calculation");
    setCalculate(calculate);
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle="لیست شارژ قابل پرداخت هر واحد"
        rows={calculate.map((c) => new CalculateInfo(c))}
        headers={headerTitle}
      >
        <Button
          className="mx-2 p-2"
          color="danger"
          onClick={() => toggleModal("add")}
        >
          محاسبه شارژ همه واحدها
        </Button>
      </ATable>
      <FormModal
        Form={CalculateForm}
        toggle={() => toggleModal("add")}
        data={getModalData("add")}
        mode={formMode.add}
      />
    </>
  );
};
export default Calculate;
