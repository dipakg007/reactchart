import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menu() {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/barchart"
          action
        >
          Bar Chart
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/linechart"
          action
        >
          Line Chart
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/daughnutchart"
          action
        >
          Daughnut Chart
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/piechart"
          action
        >
          Pie Chart
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/radarchart"
          action
        >
          Radar Chart
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menu;
