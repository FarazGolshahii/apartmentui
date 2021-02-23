import Dashboard from "./Dashboard/dashboard";
import Units from "./Units/units";
import Costs from "./Costs/costs";
import Bill from "./Bill/bill";
import History from "./History/History";
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
    path: "/History",
    name: "تاریخچه",
    icon: "",
    component: History,
    layout: "/admin",
  },
];
export default routes;
