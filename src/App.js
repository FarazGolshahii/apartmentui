import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./View/Dashboard/dashboard";
import Units from "./View/Units/units";
import Header from "./Component/Header/Header";
function App() {
  return (
    <Container fluid className="h-100 p-0">
      <Row className="h-100 p-0 m-0">
        <Col style={{ "max-width": "14%" }} className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-0">
          <Header brandText={"شارژ ساختمان ما"}></Header>

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/units" component={Units} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
