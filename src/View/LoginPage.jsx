import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import BuildingForm from "../Component/Form/BuildingForm";
import formMode from "../Component/Form/FormConfig";
import "./login.css";
const Login = () => {
  const history = useHistory();
  return (
    <div id="grad" className="text-center">
      <div className="h-25"></div>
      <Col sm="12" md="6" className="d-inline-block">
        <BuildingForm
          onSuccess={() => history.push("/Dashboard")}
          mode={formMode.add}
        ></BuildingForm>
      </Col>
    </div>
  );
};
export default Login;
