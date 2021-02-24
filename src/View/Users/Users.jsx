import { useState } from "react";
import AModal from "../../Component/Modal/modal";
import UnControlledModal from "../../Component/Modal/UncontrolledModal";
import ATable from "../../Component/Table/Table";
import AddUserForm from "../../Component/Form/AddUserForm";
import EditUserForm from "../../Component/Form/EditUserForm";
const userInfo = [
  {
    UserName: "احمد اکبری",
    PhoneNum: "09126753456",
    from: "1398/1/1",
    to: "1399/1/1",
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
  {
    title: "تاریخ شروع / پایان مالکیت",
    field: "liveDate",
  },
];

class UserInfo {
  constructor(data) {
    for (let item in data) {
      this[item] = data[item];
    }
  }
  get liveDate() {
    return this.from + " تا " + this.to;
  }
}

const Users = () => {
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
          <AddUserForm></AddUserForm>
        </AModal>
        <UnControlledModal toggle={editToggle} modal={editData.isActive}>
          <EditUserForm></EditUserForm>
        </UnControlledModal>
      </ATable>
    </>
  );
};

export default Users;
