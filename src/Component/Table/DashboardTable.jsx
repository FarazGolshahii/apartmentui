import React from "react";

// reactstrap components
import {
  Button,
  Table,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
import ATable from "./Table";
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
                      تعداد کل واحدها
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">6</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-chart-bar" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">نسبت به ماه گذشته</span>{" "}
                  <span className="text-warning mr-2">
                    <i className="fa fa-arrow-up" /> 1.23%
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
                      وضعیت شارژ های پرداختی
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">4</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="fas fa-chart-pie" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">نسبت به ماه گذشته</span>
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 2.14%
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
                      وضعیت شارژ های پرداخت نشده
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">2</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i className="fas fa-percent" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-nowrap">نسبت به ماه گذشته</span>
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 1.1%
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
                      تعداد کل اعضای ساختمان
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">42</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm ">
                  <span className="text-nowrap">نسبت به سال گذشته</span>{" "}
                  <span className="text-warning mr-2">
                    <i className="fas fa-arrow-down" /> 1.1%
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
                    <h3 className="mb-0 text-right">کار های انجام نشده</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">عنوان</th>
                    <th scope="col">توضیحات</th>
                    <th scope="col">لینک</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">قبض آب</th>
                    <td>قبض آب بر اساس تعداد نفرات ساختمان انجام شده است</td>
                    <td>
                      <button className="btn pb-0 bg-warning pr-2 pl-2 pt-1 text-white">
                        مشاهده<i aria-hidden="true"></i>
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
