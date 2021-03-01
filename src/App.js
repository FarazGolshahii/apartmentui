import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./View/Dashboard/dashboard";
import Units from "./View/Units/units";
import Costs from "./View/Costs/costs";
import Header from "./Component/Header/Header";
import Users from "./View/Users/Users";
import Building from "./View/Building/Building";
import PageVariable from "./variable";
function App() {
  return (
    <Container fluid className="h-100 p-0">
      <Row className="h-100 p-0 m-0">
        <Col style={{ "max-width": "14%" }} className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-0">
          <Header brandText={PageVariable.BuildingInfo.BuildingName}></Header>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/units" component={Units} />
          <Route path="Building" component={Building} />
          <Route path="/costs" component={Costs} />
          <Route path="/Users" component={Users} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
