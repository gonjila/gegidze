import React, { useContext } from "react";
import { Table, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { reportsContext } from "../../context/reportsCtx";

ChartJS.register(ArcElement, Tooltip, Legend);

function Projectswithchart() {
  const { projects, gateways, reports, totalAmount } = useContext(
    reportsContext
  );

  const productsPrices = projects.map((project) => {
    let currentAmount = 0;
    reports.map((report) => {
      if (project.projectId === report.projectId) {
        currentAmount += report.amount;
      }
    });
    return currentAmount;
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const chartData = {
    labels: projects.map((project) => project.name),
    datasets: [
      {
        label: "# of Votes",
        data: productsPrices.map((price) => (price * 100) / totalAmount),
        backgroundColor: projects.map(
          () =>
            `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
              255
            )}, 0.2)`
        ),
        borderColor: projects.map(
          () =>
            `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(
              255
            )}, 1)`
        ),
        borderWidth: 1,
      },
    ],
  };

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
        <Col xs={6}>
          <Doughnut data={chartData} />
        </Col>
      </Row>
    </>
  );
}

export default Projectswithchart;
