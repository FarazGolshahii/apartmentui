import routes from "../../View/Routes";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="navbar-light bg-white h-100 shadow pt-5 p-1">
      {routes.map((route) => (
        <div>
          <NavLink
            to={route.path}
            className="text-right btn w-100"
            activeClassName="btn-info"
          >
            {route.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
