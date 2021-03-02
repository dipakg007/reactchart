import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { barData } from "./data";

function BarChart() {
  const options = {
    title: {
      display: true,
      text: "Bar Chart Demo",
      fontSize: 20,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Bar data={barData} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default BarChart;
