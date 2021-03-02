import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { doughnutData } from "./data";

function DoughnutChart() {
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart Demo",
      fontSize: 20,
    },
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Doughnut data={doughnutData} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default DoughnutChart;
