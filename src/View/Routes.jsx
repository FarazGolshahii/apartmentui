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
    icon: "fas fa-home",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/units",
    name: "واحد ها",
    icon: "fas fa-building",
    component: Units,
    layout: "/admin",
  },
  // {
  //   path: "/Owner&Tenent",
  //   name: "اطلاعات مالکین و ساکنین",
  //   icon: "",
  //   component: OwnerTenent,
  //   layout: "/admin",
  // },
  {
    path: "/costs",
    name: "هزینه ها",
    icon: "fas fa-money-bill",
    component: Costs,
    layout: "/admin",
  },
  {
    path: "/bill",
    name: "صورتحساب / پرداخت",
    icon: "	fa fa-credit-card",
    component: Bill,
    layout: "/admin",
  },
  {
    path: "/Users",
    name: "اعضای ساختمان",
    icon: "fa fa-users",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/History",
    name: "تاریخچه",
    icon: "fa fa-history",
    component: History,
    layout: "/admin",
  },
];
export default routes;
