import React from "react";
import { Radar } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { useStateValue } from "./StateProvider";

function RadarChart() {
  const [{ radardata }, dispatch] = useStateValue();
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: radardata,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
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
          <Radar data={data} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default RadarChart;
