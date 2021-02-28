import { useEffect, useState } from "react";
import ATable from "../../Component/Table/Table";
import UserForm from "../../Component/Form/UserForm";
import { DeleteData, GetData, PostData } from "../../Services/ApiServices";
<<<<<<< HEAD
import formMode from "../../Component/Form/FormConfig";
import DeleteForm from "../../Component/Form/DeleteForm";
import FormModal from "../../Component/Modal/FormModal";
import { Button } from "reactstrap";
import useModal from "../../Component/Modal/UseModal";

const headerTitle = [
=======

const userInfo = [
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e
  {
    title: "نام",
    field: "Name",
  },
  {
    title: "نام خانوادکی",
    field: "LastName",
  },
  {
    title: "شماره تماس",
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
<<<<<<< HEAD

const Users = () => {
=======
const GetUnitData = async (id) => {
  return await GetData(`BaseInfo/Apartment/${id}`);
};

const Users = () => {
  const addUser = (data) => 
  {
    PostData("baseinfo/expense", JSON.stringify(data));
  }
  const deleteCost = (data) => 
  {
    DeleteData("baseinfo/expense", JSON.stringify(data));
  }
  const [editData, setEditData] = useState({ isActive: false, unitId: null });
  const [deleteData, setDeleteData] = useState({
    isActive: false,
    unitId: null,
  });
>>>>>>> b3fed793b94346f67b0c7440c47654461e3da64e

  const [user, setUser] = useState([]);
  const [modalState, toggleModal, getModalData] = useModal([
    "add",
    "edit",
    "delete",
  ]);

  useEffect(async () => {
    const { data: user } = await GetData("BaseInfo/Expense");
    setUser(user);
  }, [modalState]);
  return (
    <>
      <ATable
        tableTitle="لیست افراد ساختمان"
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
          ایجاد عضو
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
