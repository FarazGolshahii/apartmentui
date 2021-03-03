const PageVariable = {
  BuildingInfo: { BuildingName: "سیستم مدیریت شارژ ساختمان" },
  Routers: {
    Dashboard: "داشبورد",
    Unit: "واحد ها",
    Building: "ساختمان",
    Costs: "هزینه ها",
    Calculate: "محاسبه شارژ",
    Bill: "صورتحساب / پرداخت",
    Users: "اعضای ساختمان",
  },
  Costs: {
    headerTitle: {
      title: "نام هزینه",
      expenseCategoryName: "گروه",
      amount: "مبلغ",
      liveDate: "بازه موثر پرداخت",
    },
    tableTitle: "لیست هزینه ها",
    addCategoryButton: "ایجاد گروه هزینه",
    addCostButton: "ایجاد هزینه",
  },
  Building: {
    headerTitle: {
      title: "نام هزینه",
      UnitNumber: "تعداد واحدها",
    },
  },
  Units: {
    headerTitle: {
      unitNumber: "شماره واحد",
      area: "متراژ",
      ownerName: "نام مالک",
      tenantName: "نام ساکن",
      occupantcount: "تعداد ساکنین",
      ownerLiveDate: "تاریخ شروع/پایان مالکیت",
      tenantLiveDate: "تاریخ شروع/پایان سکونت",
    },
    tableTitle: "لیست واحد ها",
    addUnitButton: "ایجاد واحد",
  },
  Calculate: {},
  Users: {
    headerTitle: {
      Name: "نام",
      LastName: "نام خانوادگی",
      PhoneNumber: "شماره تماس",
    },
    tableTitle: "لیست افراد ساختمان",
    addUserButton: "ایجاد عضو",
  },
  CostCategoryForm: {
    headerTitle: "ایجاد هزینه جدید",
    expensCategoryName: "نام هزینه:",
    placeholder: "نام گروه هزینه",
    formulaType: {
      formulaTypeTitle: "نحوه محاسبه هزینه:",
      formulaType: "نحوه محاسبه",
      formulaType1: "بر اساس متراژ",
      formulaType2: "بر اساس نفرات",
      formulaType3: "بر اساس متراژ و نفرات",
      formulaType0: "بر اساس مقدار ثابت",
    },
    submitButton: "اضافه کردن",
  },
  CostForm: {
    cost: "هزینه",
    title: { headerTitle: "نام هزینه:", placeholder: "نام هزینه" },
    amount: { headerTitle: "مبلغ:", placeholder: "مبلغ (ریال)" },
    expenseCategoryId: { headerTitle: "گروه هزینه:" },
    liveDate: {
      fromTitle: "تاریخ شروع بازه پرداخت:",
      toTitle: "تاریخ پایان بازه پرداخت:",
    },
  },
  DeleteForm: { text1: "آیا از ", text2: " مطمعن هستید؟ " },
  UnitForm: {
    unit: "واحد",
    unitNumber: {
      headerTitle: "شماره واحد:",
      placeholder: "شماره واحد",
    },
    area: {
      headerTitle: "متراژ:",
      placeholder: "متراژ",
    },
    ownerName: {
      headerTitle: "نام مالک:",
      placeholder: "مالک را انتخاب کنید",
    },
    tenantName: {
      headerTitle: "نام ساکن:",
      placeholder: "ساکن را انتخاب کنید",
    },
    occupantcount: {
      headerTitle: "تعداد ساکنین:",
      placeholder: "تعداد",
    },
    ownerLiveDate: {
      fromTitle: "تاریخ شروع بازه مالکیت:",
      toTitle: "تاریخ پایان بازه مالکیت:",
    },
    tenantLiveDate: {
      fromTitle: "تاریخ شروع بازه سکونت:",
      toTitle: "تاریخ پایان بازه سکونت:",
    },
    checkboxTitle: "واحد دارای ساکن است.",
    addButton: "اضافه کردن",
  },
  UserForm: {
    user: "عضو",
    Name: {
      headerTitle: "نام:",
      placeholder: "نام",
    },
    LastName: {
      headerTitle: "نام خانوادگی:",
      placeholder: "نام خانوادگی",
    },
    PhoneNumber: {
      headerTitle: "شماره تماس:",
      placeholder: "شماره تماس",
    },
  },
  BuildingForm: {
    Building: "ساختمان",
    Name: { headerTitle: "نام ساختمان:", placeholder: "نام ساختمان" },
    NumberOfUnits: {
      headerTitle: "تعداد واحدها:",
      placeholder: "تعداد واحدها",
    },
  },
  Table: "ویرایش / حذف",
  Dashboard: {
    countAllUnits: {
      text: "تعداد کل واحدها",
      detail: "نسبت به ماه گذشته",
      number: "6",
      percent: "1.23%",
    },
    chargeDetail: {
      text: "وضعیت شارژ های پرداختی",
      detail: "نسبت به ماه گذشته",
      number: "4",
      percent: "2.14%",
    },
    unSuccessCharge: {
      text: "وضعیت شارژ های پرداخت نشده",
      detail: "نسبت به ماه گذشته",
      number: "2",
      percent: "1.1%",
    },
    countAllUsers: {
      text: "تعداد کل اعضای ساختمان",
      detail: "نسبت به سال گذشته",
      number: "42",
      percent: "1.1%",
    },
    task: {
      title: "کار های انجام نشده",
      headerTitle: {
        id: "عنوان",
        detail: "توضیحات",
        link: "لینک",
      },
      linkButton: "مشاهده",
    },
  },
};

export default PageVariable;
