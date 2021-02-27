import {
  DeleteData,
  GetData,
  PostData,
  PutData,
} from "../../Services/ApiServices";
import formMode from "./FormConfig";

const { useState } = require("react");

const useFormData = ({ data, url, mode, onSuccess }) => {
  const [formData, setData] = useState(data);

  const handleChange = (event) => {
    const newData = { ...formData };
    if (isNaN(event.target.value) || event.target.value === "")
      newData[event.target.name] = event.target.value;
    else newData[event.target.name] = +event.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (mode) {
      case formMode.add:
        await PostData(url, formData);
        break;
      case formMode.edit:
        await PutData(url, formData);
        break;
      case formMode.delete:
        await DeleteData(url, formData);
        break;
      default:
        await PostData(url, formData);
    }

    onSuccess();
  };

  return [formData, handleChange, handleSubmit, setData];
};

export default useFormData;
