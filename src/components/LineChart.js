import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { lineData } from "./data";

function LineChart() {
  const options = {
    title: {
      display: true,
      text: "Line Chart Demo",
      fontSize: 20,
    },
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-3",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Line data={lineData} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default LineChart;
