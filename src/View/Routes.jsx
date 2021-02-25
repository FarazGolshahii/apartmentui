import Dashboard from "./Dashboard/dashboard";
import Units from "./Units/units";
import Costs from "./Costs/costs";
import Bill from "./Bill/bill";
import History from "./History/History";
import Users from "./Users/Users";
import OwnerTenent from "./OwnerTenent/OwnerTenent";
const routes = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: "",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/units",
    name: "واحد ها",
    icon: "",
    component: Units,
    layout: "/admin",
  },
  ,
  {
    path: "/Owner&Tenent",
    name: "اطلاعات مالکین و ساکنین",
    icon: "",
    component: OwnerTenent,
    layout: "/admin",
  },
  {
    path: "/costs",
    name: "هزینه ها",
    icon: "",
    component: Costs,
    layout: "/admin",
  },
  {
    path: "/bill",
    name: "صورتحساب / پرداخت",
    icon: "",
    component: Bill,
    layout: "/admin",
  },
  {
    path: "/Users",
    name: "اعضای ساختمان",
    icon: "",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/History",
    name: "تاریخچه",
    icon: "",
    component: History,
    layout: "/admin",
  },
];
export default routes;
