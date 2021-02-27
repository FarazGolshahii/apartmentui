import routes from "../../View/Routes";
import { NavLink } from "react-router-dom";
import { Row } from "reactstrap";
import router from "../../View/Routes";
const Sidebar = () => {
  return (
    <div className="navbar-light bg-white h-100 shadow pt-5 p-1">
      {routes.map((route) => (
        <div>
          <NavLink
            to={route.path}
            className="text-right btn w-100 nav"
            activeClassName="btn-info"
          >
            <Row>
              <div className="icon icon-shape bg-white text-info rounded-circle ml-3 mt-0">
                <i className={route.icon} />
              </div>
              {route.name}
            </Row>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
