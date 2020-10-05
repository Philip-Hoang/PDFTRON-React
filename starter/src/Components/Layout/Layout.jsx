import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import LeftPanel from "./LeftPanel";
import CenterContent from "./CenterContent";
import RightPanel from "./RightPanel";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  componentDidMount() {
    console.log("layout componenet");
  }

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Row>
          <LeftPanel />
          <CenterContent />
          <RightPanel />
        </Row>
      </Container>
    );
  }
}

export default Layout;
