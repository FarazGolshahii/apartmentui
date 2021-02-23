import AddCostForm from "../../Component/Form/AddCostForm";
import AddUnitForm from "../../Component/Form/AddUnitForm";
import AModal from "../../Component/Modal/modal";
import ATable from "../../Component/Table/Table";

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
  const handleDelete = () => console.log("sasa");
  return (
    <>
      <ATable
        tableTitle="لیست هزینه ها"
        rows={costInfo.map((c) => new CostInfo(c, handleDelete, handleDelete))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: handleDelete },
          { icon: "fa fa-trash", onClick: handleDelete },
        ]}
      >
        <AModal buttonLabel="ایجاد هزینه">
          <AddCostForm></AddCostForm>
        </AModal>
      </ATable>
    </>
  );
};

export default Costs;
