import { Button, Label, Row } from "reactstrap";
import { useEffect, useState } from "react";
import BuildingForm from "../../Component/Form/BuildingForm";
import formMode from "../../Component/Form/FormConfig";
import FormModal from "../../Component/Modal/FormModal";
import useModal from "../../Component/Modal/UseModal";
import ATable from "../../Component/Table/Table";
import { GetData } from "../../Services/ApiServices";
import PageVariable from "../../variable";
const headerTitle = [
  {
    title: PageVariable.Building.headerTitle.title,
    field: "title",
  },
  {
    title: PageVariable.Building.headerTitle.UnitNumber,
    field: "apartmentCount",
  },
];

class BuildingInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get id() {
    return this.buildingId;
  }
}

const Buildings = () => {
  const [building, setBuilding] = useState({});
  const [modalState, toggleModal, getModalData] = useModal(["edit"]);
  useEffect(async () => {
    const { data: buildings } = await GetData("BaseInfo/Building");
    setBuilding(buildings[0]);
  }, [modalState]);

  return (
    <div className="mb-4">
      <div className="text-center">
        <Label className="mt-2"> {building.buildingName} </Label>
        <Button
          className="btn btn-primary float-left btn pb-0 pr-2 pl-2 pt-1 d-inline-block mt-2 ml-3 "
          onClick={() => toggleModal("edit")}
        >
          <i className="fas fa-edit"></i>
        </Button>
      </div>
      <FormModal
        Form={BuildingForm}
        toggle={() => toggleModal("edit")}
        data={getModalData("edit")}
        mode={formMode.edit}
      />
    </div>
  );
};

export default Buildings;
