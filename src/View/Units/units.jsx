import { Row } from "react-bootstrap";
import ATable from "../../Component/Table/Table";
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
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
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
    unitNum: 1,
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
  {
    title: "ویرایش / حذف",
    field: "butn",
  },
];

class UnitInfo {
  constructor(data, onDelete, onEdit) {
    for (let item in data) {
      this[item] = data[item];
      this.onDelete = onDelete;
      this.onEdit = onEdit;
    }
  }
  get liveDate() {
    return this.from + " تا " + this.to;
  }
  get butn() {
    return (
      <div>
        <button
          className="btn pb-0 pr-2 pl-2 pt-1 d-inline-block"
          onClick={this.onEdit}
        >
          <i class="fas fa-edit" aria-hidden="true"></i>
        </button>

        <button
          className="btn pb-0 pr-2 pl-2 pt-1 d-inline-block"
          onClick={this.onDelete}
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

const Units = () => {
  const handleDelete = () => console.log("sasa");
  return (
    <>
      <ATable
        tableTitle="لیست واحدها"
        rows={unitInfo.map((c) => new UnitInfo(c, handleDelete, handleDelete))}
        headers={headerTitle}
      ></ATable>
    </>
  );
};

export default Units;
