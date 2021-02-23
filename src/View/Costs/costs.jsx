import { useState } from "react";
import AddCostForm from "../../Component/Form/AddCostForm";
import AddUnitForm from "../../Component/Form/AddUnitForm";
import AModal from "../../Component/Modal/modal";
import ATable from "../../Component/Table/Table";
import EditCostForm from "../../Component/Form/EditCostForm";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";

const costInfo = [
  {
    costName: "قبض آب",
    cost: 2000000,
    formul: "بر اساس متراژ",
    from: "1398/1/1",
    to: "1399/1/1",
  },
];
const headerTitle = [
  {
    title: "نام هزینه",
    field: "costName",
  },
  {
    title: "نوع فرمول",
    field: "formul",
  },
  {
    title: "مبلغ",
    field: "cost",
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
const Costs = () => {
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
          <AddCostForm></AddCostForm>
        </AModal>
        <UnControlledModal toggle={editToggle} modal={editData.isActive}>
          <EditCostForm></EditCostForm>
        </UnControlledModal>
      </ATable>
    </>
  );
};

export default Costs;
