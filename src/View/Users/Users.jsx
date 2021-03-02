import { useEffect, useState } from "react";
import ATable from "../../Component/Table/Table";
import UserForm from "../../Component/Form/UserForm";
import { DeleteData, GetData, PostData } from "../../Services/ApiServices";
import formMode from "../../Component/Form/FormConfig";
import DeleteForm from "../../Component/Form/DeleteForm";
import FormModal from "../../Component/Modal/FormModal";
import { Button } from "reactstrap";
import useModal from "../../Component/Modal/UseModal";
import PageVariable from "../../variable";

const headerTitle = [
  {
    title: PageVariable.Users.headerTitle.Name,
    field: "Name",
  },
  {
    title: PageVariable.Users.headerTitle.LastName,
    field: "LastName",
  },
  {
    title: PageVariable.Users.headerTitle.PhoneNumber,
    field: "PhoneNumber",
  },
];

class UserInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get id() {
    return this.userId;
  }
}

const Users = () => {
  const [user, setUser] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);

  useEffect(async () => {
    const { data: user } = await GetData("BaseInfo/Person");
    setUser(user);
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle={PageVariable.Users.tableTitle}
        rows={user.map((c) => new UserInfo(c))}
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
          {PageVariable.Users.addUserButton}
        </Button>
      </ATable>
      <FormModal
        Form={UserForm}
        toggle={() => toggleModal("add")}
        data={getModalData("add")}
        mode={formMode.add}
      />
      <FormModal
        Form={UserForm}
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

export default Users;
