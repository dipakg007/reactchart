import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { useStateValue } from "./StateProvider";

function PieChart() {
  const [{ piedata }, dispatch] = useStateValue();
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: piedata,
        backgroundColor: [
          "rgb(255, 99, 132, 0.3)",
          "rgb(54, 162, 235,0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgb(25, 177, 31,0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 177, 31, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
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
          <Pie data={data} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default PieChart;
