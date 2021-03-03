import React from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Container } from "reactstrap";
import { useStateValue } from "./StateProvider";

function LineChart() {
  const [{ data1, data2, data3 }, dispatch] = useStateValue();
  const lineData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "# of Red Votes",
        data: data1,
        backgroundColor: "rgb(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132,1)",
        borderWidth: 1,
        yAxisID: "y-axis-1",
      },
      {
        label: "# of Blue Votes",
        data: data2,
        backgroundColor: "rgb(54, 162, 235,0.3)",
        borderColor: "rgba(54, 162, 235,1)",
        borderWidth: 1,
        yAxisID: "y-axis-2",
      },
      {
        label: "# of Green Votes",
        data: data3,
        backgroundColor: "rgb(25, 177, 31,0.3)",
        borderColor: "rgba(25, 177, 31,1)",
        borderWidth: 1,
        yAxisID: "y-axis-3",
      },
    ],
  };
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
