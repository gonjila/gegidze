import React, { useRef, useContext } from "react";
import {
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import { reportsContext } from "../../context/reportsCtx";

function ReportsHeader() {
  const productRef = useRef();
  const gatewayRef = useRef();
  const fromDateRef = useRef();
  const toDateRef = useRef();

  const { projects, gateways, setReports } = useContext(reportsContext);

  const onFormSubmmit = (e) => {
    e.preventDefault();

    const formData = {
      projectId: productRef.current.value,
      gatewayId: gatewayRef.current.value,
      from: fromDateRef.current.value,
      to: toDateRef.current.value,
    };

    fetch(`http://178.63.13.157:8090/mock-api/api/report`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setReports(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Row>
        <Col xs={4}>
          <h2>Reports</h2>
          <p>Easily generate a report of your transactions</p>
        </Col>
        <Col xs={8}>
          <Row className="justify-content-end">
            <form onSubmit={(e) => onFormSubmmit(e)}>
              <select ref={productRef}>
                <option value="">All projects</option>
                {projects.map((project) => (
                  <option key={project.projectId} value={project.projectId}>
                    {project.name}
                  </option>
                ))}
              </select>

              <select ref={gatewayRef}>
                <option value="">All gateways</option>
                {gateways.map((gateway) => (
                  <option key={gateway.gatewayId} value={gateway.projectId}>
                    {gateway.name}
                  </option>
                ))}
              </select>

              <input type="date" placeholder="from date" ref={fromDateRef} />

              <input type="date" placeholder="to date" ref={toDateRef} />

              <button>Generate report</button>
            </form>

            {/* <Dropdown toggle={function noRefCheck() {}} className="mr-2 dropdownheader">
              <DropdownToggle caret>Select project</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown toggle={function noRefCheck() {}} className="mr-2 dropdownheader">
              <DropdownToggle caret>Select gateway</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem text>Dropdown Item Text</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button className="mr-2 buttonheader">From date</Button>

            <Button className="mr-2 buttonheader">to date</Button>
            <Button className="mr-2 generatebtn">Generate Report</Button> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ReportsHeader;
