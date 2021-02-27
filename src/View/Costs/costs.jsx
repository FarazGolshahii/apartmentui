import { useState } from "react";
import CostForm from "../../Component/Form/CostForm";
import CostCategoryForm from "../../Component/Form/CostCategoryForm";
import AModal from "../../Component/Modal/modal";
import ATable from "../../Component/Table/Table";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import axios from "axios";
import BaseAPIUrl from "../APIConfig";
import { Row } from "reactstrap";

const costInfo = [
  {
    expenseId: null,
    title: "قبض آب",
    price: 2000000,
    expenseCategoryId: "2",
    from: "2000-01-01",
    to: "2021-01-01",
  },
];
const headerTitle = [
  {
    title: "نام هزینه",
    field: "title",
  },
  {
    title: "نوع فرمول",
    field: "expenseCategoryId",
  },
  {
    title: "مبلغ",
    field: "price",
  },
  {
    title: "بازه موثر پرداخت",
    field: "liveDate",
  },
];

class CostInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get liveDate() {
    return this.from + " تا " + this.to;
  }
}

const GetUnitData = async (id) => {
  return await axios.get(BaseAPIUrl + `BaseInfo/Apartment/${id}`);
};

const Costs = () => {
  const addCost = (data) => {
    data.amount = +data.amount;
    axios.post(BaseAPIUrl + "baseinfo/expense", JSON.stringify(data), {
      headers: { "Content-Type": "text/json" },
    });
  };
  const deleteCost = (data) => {
    axios.delete(BaseAPIUrl + "baseinfo/expense", JSON.stringify(data), {
      headers: { "Content-Type": "text/json" },
    });
  };

  const [editData, setEditData] = useState({ isActive: false, unitId: null });
  const [deleteData, setDeleteData] = useState({
    isActive: false,
    unitId: null,
  });

  const editToggle = () =>
    setEditData({ ...editData, isActive: !editData.isActive });
  const deleteToggle = () =>
    setDeleteData({ ...deleteData, isActive: !deleteData.isActive });
  const handleDelete = (unitId) => {
    setDeleteData({
      isActive: true,
      unitId: unitId,
    });
  };
  const handleEdit = (unitId) => {
    setEditData({
      isActive: true,
      unitId: unitId,
    });
  };

  const handleAddCategory = async (data) => {
    data.formulaType = +data.formulaType;
    await axios.post(
      BaseAPIUrl + "BaseInfo/Expense/Category",
      JSON.stringify(data),
      { headers: { "Content-Type": "text/json" } }
    );
  };

  return (
    <>
      <ATable
        tableTitle="لیست هزینه ها"
        rows={costInfo.map((c) => new CostInfo(c, handleEdit, handleDelete))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: handleEdit },
          { icon: "fa fa-trash", onClick: handleDelete },
        ]}
      >
        <AModal buttonLabel="ایجاد هزینه">
          <CostForm onSubmit={addCost}></CostForm>
        </AModal>
        <AModal buttonLabel="ایجاد گروه هزینه">
          <CostCategoryForm onSubmit={handleAddCategory}></CostCategoryForm>
        </AModal>
        <UnControlledModal toggle={editToggle} modal={editData.isActive}>
          <CostForm data={costInfo[0]}></CostForm>
        </UnControlledModal>
      </ATable>
    </>
  );
};

export default Costs;
