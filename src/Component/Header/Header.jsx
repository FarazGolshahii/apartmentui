import { Container, Navbar } from "reactstrap";

const Header = (props) => {
  return (
    <Navbar
      className="navbar-top bg-gradient-info mb-3"
      expand="md"
      id="navbar-main"
    >
      <Container fluid>
        <h3 className="mb-0 text-white">{props.brandText}</h3>
        {/* <Link
          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
          to="/"
        >
          
        </Link> */}
      </Container>
    </Navbar>
  );
};

export default Header;
