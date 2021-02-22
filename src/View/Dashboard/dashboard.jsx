import { Col, Row } from "react-bootstrap";
import Header from "../../Component/Header/Header";
import Sidebar from "../../Component/Sidebar/Sidebar";
import ATable from "../../Component/Table/Table";

const Dashboard = () => {
  return (
    <>
      <Header brandText={"شارژ ساختمان ما"}></Header>
      <ATable></ATable>
    </>
  );
};

export default Dashboard;
