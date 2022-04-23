import React, { useContext } from "react";
import { Table, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Doughnut } from "react-chartjs-2";

import { reportsContext } from "../../context/reportsCtx";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
  datasets: [
    {
      label: "Attendance for Week 1",
      data: [25, 24, 25, 25, 3],
      borderColor: ["rgba(255,206,86,0.2)"],
      backgroundColor: [
        "rgba(232,99,132,1)",
        "rgba(232,211,6,1)",
        "rgba(54,162,235,1)",
        "rgba(255,159,64,1)",
        "rgba(153,102,255,1)",
      ],
      pointBackgroundColor: "rgba(255,206,86,0.2)",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Doughnut Chart",
      color: "blue",
      font: {
        size: 34,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
  },
};

function Projectswithchart() {
  const { projects, gateways, reports } = useContext(reportsContext);

  return (
    <>
      <Row>
        <Col xs={6}>
          <div id="accordion">
            {projects &&
              projects.map((project) => (
                <div className="card" key={project.projectId}>
                  <div
                    className="card-header"
                    id="headingOne"
                    data-toggle="collapse"
                    data-target={`#${project.projectId}`}
                    aria-expanded="true"
                    aria-controls={`${project.projectId}`}
                  >
                    <div className="row justify-content-between">
                      <h5 className="mb-0 ml-4">{project.name}</h5>
                      <h5 className="mr-4">
                        TOTAL:{" "}
                        {reports &&
                          reports
                            .filter(
                              (report) => report.projectId === project.projectId
                            )
                            .reduce(
                              (prev, curr) =>
                                Math.round((prev + curr.amount) * 100) / 100,
                              0
                            )}{" "}
                        USD
                      </h5>
                    </div>
                  </div>

                  <div
                    id={`${project.projectId}`}
                    className="collapse hide"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <Table striped>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Gateway</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                          </tr>
                        </thead>

                        {reports &&
                          reports
                            .filter(
                              (report) => project.projectId === report.projectId
                            )
                            .map((filteredReport) => (
                              <tbody key={filteredReport.paymentId}>
                                <tr>
                                  <th scope="row">{filteredReport.created}</th>
                                  <td>
                                    {gateways &&
                                      gateways.find(
                                        (gateway) =>
                                          gateway.gatewayId ===
                                          filteredReport.gatewayId
                                      ).name}
                                  </td>
                                  <td>a732b</td>
                                  <td>{filteredReport.amount} USD</td>
                                </tr>
                              </tbody>
                            ))}
                      </Table>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Col>
        <Col xs={6}></Col>
      </Row>
    </>
  );
}

export default Projectswithchart;
