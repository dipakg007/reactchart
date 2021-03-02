import { Col, Container, Row } from "reactstrap";
import "./App.css";
import BarChart from "./components/BarChart";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LineChart from "./components/LineChart";
import DaughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import RadarChart from "./components/RadarChart";

function App() {
  return (
    <div className="app">
      <Router>
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/barchart">
                <BarChart />
              </Route>
              <Route path="/linechart">
                <LineChart />
              </Route>
              <Route path="/daughnutchart">
                <DaughnutChart />
              </Route>
              <Route path="/piechart">
                <PieChart />
              </Route>
              <Route path="/radarchart">
                <RadarChart />
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
