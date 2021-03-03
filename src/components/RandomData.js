import React from "react";
import { Button, Card, CardBody, Container } from "reactstrap";
import { useStateValue } from "./StateProvider";

function RandomData() {
  const [{}, dispatch] = useStateValue();
  const randomData = () => {
    var piedata = [];
    var doughnutdata = [];
    var radardata = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    for (let i = 1; i <= 6; i++) {
      piedata.push(Math.floor(Math.random() * 20 + 1));
      doughnutdata.push(Math.floor(Math.random() * 20 + 1));
      radardata.push(Math.floor(Math.random() * 10 + 1));
      data1.push(Math.floor(Math.random() * 30 + 1));
      data2.push(Math.floor(Math.random() * 30 + 1));
      data3.push(Math.floor(Math.random() * 30 + 1));
    }
    dispatch({
      type: "SET_DATA",
      piedata: piedata,
      doughnutdata: doughnutdata,
      radardata: radardata,
      data1: data1,
      data2: data2,
      data3: data3,
    });
  };
  return (
    <Card>
      <CardBody className="text-center">
        <Container className="text-center">
          <Button color="success" outline onClick={randomData}>
            Generate Random Data
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default RandomData;
