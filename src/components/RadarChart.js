import React from "react";
import { Radar } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { radarData } from "./data";

function RadarChart() {
  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
    title: {
      display: true,
      text: "Radar Chart Demo",
      fontSize: 20,
    },
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Radar data={radarData} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default RadarChart;
