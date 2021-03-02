import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { doughnutData } from "./data";

function PieChart() {
  const options = {
    title: {
      display: true,
      text: "Pie Chart Demo",
      fontSize: 20,
    },
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Pie data={doughnutData} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default PieChart;
