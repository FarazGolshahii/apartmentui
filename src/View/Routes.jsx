import Dashboard from "./Dashboard/dashboard";
import Units from "./Units/units";
import Costs from "./Costs/costs";
import Bill from "./Bill/bill";
import History from "./History/History";
import Users from "./Users/Users";
import Building from "./Building/Building";
import PageVariable from "../variable";

const routes = [
  {
    path: "/dashboard",
    name: PageVariable.Routers.Dashboard,
    icon: "fas fa-home",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/units",
    name: PageVariable.Routers.Unit,
    icon: "fas fa-building",
    component: Units,
    layout: "/admin",
  },
  {
    path: "/costs",
    name: PageVariable.Routers.Costs,
    icon: "fas fa-money-bill",
    component: Costs,
    layout: "/admin",
  },
  {
    path: "/bill",
    name: PageVariable.Routers.Bill,
    icon: "	fa fa-credit-card",
    component: Bill,
    layout: "/admin",
  },
  {
    path: "/Users",
    name: PageVariable.Routers.Users,
    icon: "fa fa-users",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/History",
    name: PageVariable.Routers.History,
    icon: "fa fa-history",
    component: History,
    layout: "/admin",
  },
];
export default routes;
