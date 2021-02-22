import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
} from "reactstrap";
import APagination from "./Pagination";
import "./Table.css";

const ATable = ({ headers, tableTitle, rows, actions, children }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <h3 className="mb-0">{tableTitle}</h3>
                  <div className="col text-left">{children}</div>
                </Row>
              </CardHeader>
              <table class="table">
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th scope="col">{header.title}</th>
                    ))}
                    {actions ? <th>ویرایش / حذف</th> : null}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr>
                      {headers.map((header) => (
                        <td>{row[header.field]}</td>
                      ))}
                      {actions ? (
                        <td>
                          {actions.map((action) => (
                            <button
                              className="btn pb-0 pr-2 pl-2 pt-1 d-inline-block"
                              onClick={action.onClick}
                            >
                              <i className={action.icon} aria-hidden="true"></i>
                            </button>
                          ))}
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
              <CardFooter className="py-4">
                <APagination></APagination>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ATable;
