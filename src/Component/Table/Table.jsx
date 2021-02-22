import { Table } from "react-bootstrap/Table";
import {
  Card,
  CardHeader,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
} from "reactstrap";

const unitInfo = [
  {
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
  {
    unitNum: 1,
    area: 150,
    ownerName: "رضا حسینی",
    tenentName: "محمد اکبری",
    tenentNum: 4,
    from: "1398/1/1",
    to: "1399/1/1",
  },
];

const ATable = () => {
  return (
    <>
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">شماره واحد</th>
                    <th scope="col">متراژ</th>
                    <th scope="col">نام مالک</th>
                    <th scope="col">نام ساکن</th>
                    <th scope="col">تعداد ساکنین</th>
                    <th scope="col">تاریخ شروع/پایان مالکیت</th>
                    <th scope="col">ویرایش / حذف</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{unitInfo[0].unitNum}</th>
                    <td>{unitInfo.area}</td>
                    <td>{unitInfo.ownerName}</td>
                    <td>{unitInfo.tenentName}</td>
                    <td>{unitInfo.tenentNum}</td>
                    <td>
                      {unitInfo.from} to {unitInfo.to}
                    </td>
                    <td className="text-left">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                      </UncontrolledDropdown>

                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ATable;
