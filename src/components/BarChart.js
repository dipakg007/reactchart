import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { useStateValue } from "./StateProvider";

function BarChart() {
  const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: data1,
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
      },
      {
        label: "# of Blue Votes",
        data: data2,
        backgroundColor: "rgb(54, 162, 235,0.3)",
        borderColor: "rgba(54, 162, 235,1)",
        borderWidth: 1,
      },
      {
        label: "# of Green Votes",
        data: data3,
        backgroundColor: "rgb(25, 177, 31,0.3)",
        borderColor: "rgba(25, 177, 31,1)",
        borderWidth: 1,
      },
    ],
  };
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
          <Bar data={data} options={options} />
        </Container>
      </CardBody>
    </Card>
  );
}

export default BarChart;
