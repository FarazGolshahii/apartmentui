import ATable from "../../Component/Table/Table";
import AModal from "../../Component/Modal/modal";
import UnitForm from "../../Component/Form/UnitForm";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import { useEffect, useState } from "react";
import { GetData, PostData } from "../../Services/ApiServices";
import formMode from "../../Component/Form/FormConfig";
import DeleteForm from "../../Component/Form/DeleteForm";
import { Button } from "reactstrap";
import FormModal from "../../Component/Modal/FormModal";
import useModal from "../../Component/Modal/UseModal";
import { NetDatetime } from "../../Utility/NETUtility";
import PageVariable from "../../variable";

const headerTitle = [
  {
    title: PageVariable.Units.headerTitle.unitNumber,
    field: "number",
  },
  {
    title: PageVariable.Units.headerTitle.area,
    field: "area",
  },
  {
    title: PageVariable.Units.headerTitle.ownerName,
    field: "ownerName",
  },
  {
    title: PageVariable.Units.headerTitle.tenantName,
    field: "tenantName",
  },
  {
    title: PageVariable.Units.headerTitle.occupantcount,
    field: "occupantcount",
  },
  {
    title: PageVariable.Units.headerTitle.ownerLiveDate,
    field: "ownerLiveDate",
  },
  {
    title: PageVariable.Units.headerTitle.tenantLiveDate,
    field: "tenantLiveDate",
  },
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
  const [units, setUnits] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);

  useEffect(async () => {
    const { data: units } = await GetData("BaseInfo/Apartment/1");
    setUnits(units);
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle={PageVariable.Units.tableTitle}
        rows={units.map((c) => new UnitInfo(c))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: (id) => toggleModal("edit", id) },
        ]}
      >
        <Button
          className="mx-2 p-2"
          color="danger"
          onClick={() => toggleModal("add")}
        >
          {PageVariable.Units.addUnitButton}
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
        url="BaseInfo/Apartment"
        toggle={() => toggleModal("delete")}
        data={getModalData("delete")}
        mode={formMode.delete}
      />
    </>
  );
};

export default Units;
