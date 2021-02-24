import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [dropdownOpen, setOpen] = React.useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Button Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>item 1</DropdownItem>
        <DropdownItem disabled>item 2</DropdownItem>
        <DropdownItem>item 3</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>item 4</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
