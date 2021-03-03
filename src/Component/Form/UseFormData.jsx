import { useState } from "react";
import { DeleteData, PostData, PutData } from "../../Services/ApiServices";
import formMode from "./FormConfig";

const useFormData = ({
  data,
  url,
  mode,
  onSuccess,
  validator = () => true,
}) => {
  const [formData, setData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...formData };
    if (validator(name, value)) {
      event.target.className = event.target.className.replace(
        "border-danger",
        ""
      );
    } else {
      event.target.className += " border-danger";
    }
    if (isNaN(value) || value === "") newData[name] = value;
    else newData[name] = +value;
    setData(newData);
  };

  const checkValidatitvity = () => {
    let isValid = true;
    for (let key in formData) {
      isValid = isValid && validator(key, formData[key]);
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkValidatitvity()) return;
    let response = null;
    switch (mode) {
      case formMode.add:
        response = await PostData(url, formData);
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
    onSuccess(response);
  };

  return [formData, handleChange, handleSubmit, setData];
};

export default useFormData;
