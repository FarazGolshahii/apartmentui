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
import { ReadBuidling } from "../../Services/StorageServces/LocalStorageService";

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
    field: "occupantCount",
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
  constructor(data, persons) {
    this.id = data.apartment.apartmentId;
    this.unitNumber = data.apartment.number;
    this.area = data.apartment.area;
    this.occupantCount = data.apartment.occupantCount;
    this.ownerName = "بدون مالک";
    this.tenantName = "بدون ساکن";
    if (data.owner) {
      const owner = persons.find((p) => p.personId === data.owner.personId);
      this.ownerName = owner ? owner.name + " " + owner.lastname : "-";
      this.ownerFrom = data.owner.from;
      this.ownerTo = data.owner.to;
    }
    if (data.tenant) {
      const tenant = persons.find((p) => p.personId === data.tenant.personId);
      this.tenantName = tenant ? tenant.name + " " + tenant.lastname : "-";
      this.tenantFrom = data.tenant.from;
      this.tenantTo = data.tenant.to;
    }
  }
  get ownerLiveDate() {
    return this.ownerFrom
      ? NetDatetime(this.ownerFrom) + " تا " + NetDatetime(this.ownerTo)
      : "بدون مالک";
  }
  get tenantLiveDate() {
    return this.ownerFrom
      ? NetDatetime(this.ownerFrom) + " تا " + NetDatetime(this.ownerTo)
      : "بدون مالک";
  }
}

const Units = () => {
  const [units, setUnits] = useState([]);
  const [persons, setPersons] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);

  useEffect(async () => {
    setUnits(await GetData(`BaseInfo/Apartment/${ReadBuidling()}`));
    setPersons(await GetData("BaseInfo/Person"));
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle={PageVariable.Units.tableTitle}
        rows={units.map((c) => new UnitInfo(c, persons))}
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
