import ATable from "../../Component/Table/Table";
import AModal from "../../Component/Modal/modal";
import UnitForm from "../../Component/Form/UnitForm";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { GetData, PostData } from "../../Services/ApiServices";
import formMode from "../../Component/Form/FormConfig";
import DeleteForm from "../../Component/Form/DeleteForm";
import { Button } from "reactstrap";
import FormModal from "../../Component/Modal/FormModal";
import useModal from "../../Component/Modal/UseModal";
import { NetDatetime } from "../../Utility/NETUtility";
=======
import { useState } from "react";
import { PostData } from "../../Services/ApiServices";
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e

const headerTitle = [
  {
    title: "شماره واحد",
    field: "unitNumber",
  },
  {
    title: "متراژ",
    field: "area",
  },
  {
    title: "نام مالک",
    field: "ownerName",
  },
  {
    title: "نام ساکن",
    field: "tenantName",
  },
  {
    title: "تاریخ شروع/پایان مالکیت",
    field: "ownerLiveDate",
  },
  {
    title: "تاریخ شروع/پایان سکونت",
    field: "tenantLiveDate",
  }
];

class UnitInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  // get ownerLiveDate() {
  //   return NetDatetime(this.ownerFrom) + " تا " + NetDatetime(this.ownerTo);
  // }
  // get tenantLiveDate() {
  //   return NetDatetime(this.tenantFrom) + " تا " + NetDatetime(this.tenantTo);
  // }
  get id() {
    return this.unitId;
  }
}

const Units = () => {
<<<<<<< HEAD
  const [units, setUnits] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);
=======
  const addUnit = (data) => 
  {
    PostData("baseinfo/expense", JSON.stringify(data));
  }
  const deleteUnit = (data) => 
  {
    deleteData("baseinfo/expense", JSON.stringify(data));
  }
  const [enterData, setEnterData] = useState({ isActive: false, unitId: null });
  const [deleteData, setDeleteData] = useState({
    isActive: false,
    unitId: null,
  });

  const enterToggle = () =>
    setEnterData({ ...enterData, isActive: !enterData.isActive });
  const deleteToggle = () =>
    setDeleteData({ ...deleteData, isActive: !deleteData.isActive });
  const handleDelete = (unitId) => {
    setDeleteData({
      isActive: true,
      unitId: unitId,
    });
  };
  const handleEnter = (unitId) => {
    setEnterData({
      isActive: true,
      unitId: unitId,
    });
  };
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e

  useEffect(async () => {
    const { data: units } = await GetData("BaseInfo/Expense");
    setUnits(units);
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle="لیست واحد ها"
        rows={units.map((c) => new UnitInfo(c))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: (id) => toggleModal("edit", id) },
          { icon: "fa fa-trash", onClick: (id) => toggleModal("delete", id) },
        ]}
      >
        <Button
          className="mx-2 p-2"
          color="danger"
          onClick={() => toggleModal("add")}
        >
          ایجاد واحد
        </Button>
      </ATable>
      <FormModal
        Form={UnitForm}
        toggle={() => toggleModal("add")}
        data={getModalData("add")}
        mode={formMode.add}
      />
      <FormModal
        Form={UnitForm}
        toggle={() => toggleModal("edit")}
        data={getModalData("edit")}
        mode={formMode.edit}
      />
      <FormModal
        Form={DeleteForm}
        url="BaseInfo/Expense"
        toggle={() => toggleModal("delete")}
        data={getModalData("delete")}
        mode={formMode.delete}
      />
    </>
  );
};

export default Units;
