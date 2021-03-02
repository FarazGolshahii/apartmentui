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

const headerTitle = [
  {
    title: "",
    field: "title",
  },
  {
    title: PageVariable.Costs.headerTitle.expenseCategoryName,
    field: "expenseCategoryName",
  },
  {
    title: PageVariable.Costs.headerTitle.amount,
    field: "amount",
  },
  {
    title: PageVariable.Costs.headerTitle.liveDate,
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
  get id() {
    return this.expenseId;
  }
}

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);

  // useEffect(async () => {
  //   const { data: bills } = await GetData("BaseInfo/");
  //   setBills(bills);
  // }, [modalState]);

  return (
    <Container>
      <Card></Card>
    </Container>
  );
};

export default Bills;
