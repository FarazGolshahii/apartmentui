import { useState } from "react";
import AModal from "../../Component/Modal/modal";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import ATable from "../../Component/Table/Table";
import UserForm from "../../Component/Form/UserForm";
import { DeleteData, GetData, PostData } from "../../Services/ApiServices";

const userInfo = [
  {
    userId:null,
    UserName: "احمد اکبری",
    PhoneNum: "09126753456",
  },
];
const headerTitle = [
  {
    title: "نام و نام خانوادگی",
    field: "UserName",
  },
  {
    title: "شماره تماس",
    field: "PhoneNum",
  },
];

class UserInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
}
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

  const editToggle = () =>
    setEditData({ ...editData, isActive: !editData.isActive });
  const deleteToggle = () =>
    setDeleteData({ ...deleteData, isActive: !deleteData.isActive });
  const handleDelete = (unitId) => {
    setDeleteData({
      isActive: true,
      unitId: unitId,
    });
  };
  const handleEdit = (unitId) => {
    setEditData({
      isActive: true,
      unitId: unitId,
    });
  };

  return (
    <>
      <ATable
        tableTitle="لیست افراد ساختمان"
        rows={userInfo.map((c) => new UserInfo(c, handleEdit, handleDelete))}
        headers={headerTitle}
        actions={[
          { icon: "fas fa-edit", onClick: handleEdit },
          { icon: "fa fa-trash", onClick: handleDelete },
        ]}
      >
        <AModal buttonLabel="ایجاد عضو جدید">
        <UserForm onSubmit={addUser}></UserForm>
        </AModal>
        <UnControlledModal toggle={editToggle} modal={editData.isActive}>
          <UserForm data={userInfo[0]}></UserForm>
        </UnControlledModal>
      </ATable>
    </>
  );
};

export default Users;
