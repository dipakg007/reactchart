import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";

function Home() {
  return (
    <div>
      <Jumbotron className="text-center">
        <h2>Learning purpose</h2>
        <p>
          Tech used: React, react-chartjs-2, React-router-dom, reactstrap,
          firebase
        </p>
        <Container>
          <a href="https://www.google.co.in/">
            <Button color="primary" outline>
              Github Link
            </Button>
          </a>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
