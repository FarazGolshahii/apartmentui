import { Row } from "react-bootstrap";
import ATable from "../../Component/Table/Table";
import AModal from "../../Component/Modal/modal";
import AddUnitForm from "../../Component/Form/AddUnitForm";
import EditUnitForm from "../../Component/Form/EditUnitForm";
const unitInfo = [
  {
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 2,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 3,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 4,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
];
const headerTitle = [
  {
    title: "شماره واحد",
    field: "unitNum",
  },
  {
    title: "متراژ",
    field: "area",
  },
  {
    title: "نام ساکن",
    field: "tenentName",
  },
  {
    title: "نام مالک",
    field: "ownerName",
  },
  {
    title: "تعداد ساکنین",
    field: "tenentNum",
  },
  {
    title: "تاریخ شروع / پایان مالکیت",
    field: "liveDate",
  },
];

class UnitInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get liveDate() {
    return this.from + " تا " + this.to;
  }
}

const Units = () => {
  const handleDelete = () => console.log("sasa");
  const handleEdit = () => {
    <>
      <AModal buttonLabel="ایجاد هزینه">
        <EditUnitForm></EditUnitForm>
      </AModal>
    </>;
  };
  return (
    <>
      <ATable
        tableTitle="لیست واحدها"
        rows={unitInfo.map((c) => new UnitInfo(c, handleEdit, handleDelete))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: handleEdit },
          { icon: "fa fa-trash", onClick: handleDelete },
        ]}
      >
        <AModal buttonLabel="ایجاد واحد">
          <AddUnitForm></AddUnitForm>
        </AModal>
      </ATable>
    </>
  );
};

export default Units;
