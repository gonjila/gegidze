import React from "react";
import {
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Button,
} from "reactstrap";
function ReportsHeader() {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <h2>Reports</h2>
          <p>Easily generate a report of your transactions</p>
        </Col>
        <Col xs={8}>
          <Row className="justify-content-end">
            <Dropdown
              toggle={function noRefCheck() {}}
              className="mr-2 dropdownheader"
            >
              <DropdownToggle caret>Select project</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              toggle={function noRefCheck() {}}
              className="mr-2 dropdownheader"
            >
              <DropdownToggle caret>Select gateway</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button className="mr-2 buttonheader">From date</Button>

            <Button className="mr-2 buttonheader">to date</Button>
            <Button className="mr-2 generatebtn">Generate Report</Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ReportsHeader;
