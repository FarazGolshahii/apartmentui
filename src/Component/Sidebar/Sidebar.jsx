import routes from "../../View/Routes";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Buildings from "../../View/Building/Building";

const Sidebar = () => {
  return (
    <div className="navbar-light bg-white h-100 shadow pt-2 p-1">
      <Buildings></Buildings>
      {routes.map((route) => (
        <div>
          <NavLink
            to={route.path}
            className="text-right btn w-100 nav"
            activeClassName="btn-info"
          >
            <Row>
              <div className="icon icon-shape bg-white text-info rounded-circle ml-2 ">
                <i className={route.icon} />
              </div>
              <Col className="mt-2">{route.name}</Col>
            </Row>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
