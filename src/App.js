import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./View/Dashboard/dashboard";

function App() {
  return (
    <Container fluid className="h-100 p-0">
      <Row className="h-100 p-0 m-0">
        <Col sm="2" className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-0">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/units" component={Dashboard} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
