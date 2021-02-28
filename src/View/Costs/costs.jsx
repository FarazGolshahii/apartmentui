import { useEffect, useState } from "react";
import CostForm from "../../Component/Form/CostForm";
import CostCategoryForm from "../../Component/Form/CostCategoryForm";
import ATable from "../../Component/Table/Table";
<<<<<<< HEAD
import { GetData} from "../../Services/ApiServices";
=======
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import { DeleteData, GetData, PostData } from "../../Services/ApiServices";
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
import formMode from "../../Component/Form/FormConfig";
import { NetDatetime } from "../../Utility/NETUtility";
import useModal from "../../Component/Modal/UseModal";
import { Button } from "reactstrap";
import FormModal from "../../Component/Modal/FormModal";
import DeleteForm from "../../Component/Form/DeleteForm";

const headerTitle = [
  {
    title: "نام هزینه",
    field: "title",
  },
  {
    title: "گروه",
    field: "expenseCategoryName",
  },
  {
    title: "مبلغ",
    field: "amount",
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
    return NetDatetime(this.from) + " تا " + NetDatetime(this.to);
  }
  get id() {
    return this.expenseId;
  }
}

const Costs = () => {
  const [costs, setCosts] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
    "addCategory",
  ]);

  useEffect(async () => {
    const { data: costs } = await GetData("BaseInfo/Expense");
    setCosts(costs);
  }, [modalState]);

  return (
    <>
      <ATable
        tableTitle="لیست هزینه ها"
        rows={costs.map((c) => new CostInfo(c))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: (id) => toggleModal("edit", id) },
          { icon: "fa fa-trash", onClick: (id) => toggleModal("delete", id) },
        ]}
      >
        <Button
<<<<<<< HEAD
          className="mx-2 p-2"
          color="danger"
          onClick={() => toggleModal("addCategory")}
        >
          ایجاد گروه هزینه
        </Button>
        <Button
          className="mx-2 p-2"
          color="danger"
          onClick={() => toggleModal("add")}
        >
          ایجاد هزینه
=======
          className="mx-2"
          color="danger"
          onClick={() => toggleModal("add")}
        >
          افزودن هزینه
        </Button>
        <Button
          className="mx-2"
          color="danger"
          onClick={() => toggleModal("addCategory")}
        >
          افزودن گروه هزینه
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
        </Button>
      </ATable>
      <FormModal
        Form={CostForm}
        toggle={() => toggleModal("add")}
        data={getModalData("add")}
        mode={formMode.add}
      />
      <FormModal
        Form={CostCategoryForm}
        toggle={() => toggleModal("addCategory")}
        data={getModalData("addCategory")}
        mode={formMode.add}
      />
      <FormModal
        Form={CostForm}
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

export default Costs;
