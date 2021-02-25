import ATable from "../../Component/Table/Table";
import AModal from "../../Component/Modal/modal";
import UnitForm from "../../Component/Form/UnitForm";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import { useState } from "react";
import axios from "axios";
import BaseAPIUrl from "../APIConfig";

const unitInfo = [
  {
    unitId: null,
    unitNum: 1,
    area: 150,
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
];

class UnitInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
}

const Units = () => {
  const addUnit = (data) => 
  {
    axios.post(BaseAPIUrl + "baseinfo/expense", JSON.stringify(data),
    {headers:{'Content-Type' : 'text/json' }});
  }
  const deleteUnit = (data) => 
  {
    axios.delete(BaseAPIUrl + "baseinfo/expense", JSON.stringify(data),
    {headers:{'Content-Type' : 'text/json' }});
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

  return (
    <>
      <ATable
        tableTitle="لیست واحدها"
        rows={unitInfo.map((c) => new UnitInfo(c, handleEnter, handleDelete))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-sign-in-alt", onClick: handleEnter },
          { icon: "fa fa-trash", onClick: handleDelete },
        ]}
      >
        <AModal buttonLabel="ایجاد واحد">
        <UnitForm onSubmit={addUnit}></UnitForm>
        </AModal>
        <UnControlledModal toggle={enterToggle} modal={enterData.isActive}>
          <UnitForm data={unitInfo[0]}></UnitForm>
        </UnControlledModal>
      </ATable>
    </>
  );
};

export default Units;
