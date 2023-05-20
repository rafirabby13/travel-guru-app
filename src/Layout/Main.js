import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header.js";
import "./Main.css";
import { Col, Container, Row } from "react-bootstrap";
import RightSide from "../Pages/RightSide/RightSide.js";
import Body from "../Pages/Body/Body.js";
import LeftSide from "../Pages/LeftSide/LeftSide.js";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-5">
        <Row >
          
          <Col lg="5" style={{marginLeft:'-10px'}} className=" ">
            <Outlet></Outlet>
          </Col>
          <Col lg="7">
            <RightSide></RightSide>
          </Col>
        </Row>
      

      </Container>
      {/* <RightSide></RightSide> */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default Main;
