const { default: formMode } = require("../Component/Form/FormConfig");

const generateText = (mode) =>
{
    switch(mode)
    {
        case formMode.add : return "افزودن";
        case formMode.edit : return "ویرایش";
        case formMode.delete : return "حذف";
    }
}

export default generateText;