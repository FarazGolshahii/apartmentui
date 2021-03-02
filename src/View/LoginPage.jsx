import { useHistory } from "react-router-dom";
import { Col, Container } from "reactstrap";
import BuildingForm from "../Component/Form/BuildingForm";
import formMode from "../Component/Form/FormConfig";
import "./login.css";
const Login = () => {
  const history = useHistory();
  return (
    <div id="grad">
      <Container className="h-100 center-wrapper">
        <div className="centre">
          <BuildingForm
            onSuccess={() => history.push("/Dashboard")}
            mode={formMode.add}
          ></BuildingForm>
        </div>
      </Container>
    </div>
  );
};
export default Login;
