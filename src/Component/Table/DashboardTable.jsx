import React from "react";
// reactstrap components
import {
  Table,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import PageVariable from "../../variable";
const DashboardTable = () => {
  return (
    <Container fluid>
      <div className="header-body">
        <Row>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      {PageVariable.Dashboard.countAllUnits.text}
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {PageVariable.Dashboard.countAllUnits.number}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">
                    {PageVariable.Dashboard.countAllUnits.detail}
                  </span>
                  <span className="text-warning mr-2">
                    <i className="fa fa-arrow-up" />{" "}
                    {PageVariable.Dashboard.countAllUnits.percent}
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      {PageVariable.Dashboard.chargeDetail.text}
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {PageVariable.Dashboard.chargeDetail.number}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="fas fa-chart-pie" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">
                    {PageVariable.Dashboard.chargeDetail.detail}
                  </span>
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" />{" "}
                    {PageVariable.Dashboard.chargeDetail.percent}
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      {PageVariable.Dashboard.unSuccessCharge.text}
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {PageVariable.Dashboard.unSuccessCharge.number}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i className="fas fa-percent" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">
                    {PageVariable.Dashboard.unSuccessCharge.detail}
                  </span>
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" />
                    {PageVariable.Dashboard.unSuccessCharge.percent}
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      {PageVariable.Dashboard.countAllUsers.text}
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {PageVariable.Dashboard.countAllUsers.number}
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm ">
                  <span className="text-nowrap">
                    {PageVariable.Dashboard.countAllUsers.detail}
                  </span>
                  <span className="text-warning mr-2">
                    <i className="fas fa-arrow-down" />{" "}
                    {PageVariable.Dashboard.countAllUsers.percent}
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0 mt-3">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-right">
                      {PageVariable.Dashboard.task.title}
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">
                      {PageVariable.Dashboard.task.headerTitle.id}
                    </th>
                    <th scope="col">
                      {PageVariable.Dashboard.task.headerTitle.detail}
                    </th>
                    <th scope="col">
                      {PageVariable.Dashboard.task.headerTitle.link}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">قبض آب</th>
                    <td>قبض آب بر اساس تعداد نفرات ساختمان انجام شده است</td>
                    <td>
                      <button className="btn pb-0 bg-warning pr-2 pl-2 pt-1 text-white">
                        {PageVariable.Dashboard.task.linkButton}
                        <i aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DashboardTable;
