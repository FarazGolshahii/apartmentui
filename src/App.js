import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./View/Dashboard/dashboard";
import Units from "./View/Units/units";
import Costs from "./View/Costs/costs";
import Header from "./Component/Header/Header";
import Users from "./View/Users/Users";
import Login from "./View/LoginPage";
import PageVariable from "./variable";
import Bills from "./View/Bill/bill";
function App() {
  return (
    <Container fluid className="h-100 p-0">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/land" />
        <Route path="/">
          <Redirect to="/dashboard" from="/" />
          <Row className="h-100 p-0 m-0">
            <Col style={{ "max-width": "14%" }} className="p-0">
              <Sidebar />
            </Col>
            <Col className="p-0">
              <Header
                brandText={PageVariable.BuildingInfo.BuildingName}
              ></Header>

              <Route path="/dashboard" component={Dashboard} />
              <Route path="/units" component={Units} />
              <Route path="/Bill" component={Bills} />
              <Route path="/costs" component={Costs} />
              <Route path="/Users" component={Users} />
            </Col>
          </Row>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
