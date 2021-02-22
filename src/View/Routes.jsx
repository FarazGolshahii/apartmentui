import Dashboard from "./Dashboard/dashboard";
import Units from "./Units/units";
import Costs from "./Costs/costs";
import Bill from "./Bill/bill";

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
];
export default routes;
