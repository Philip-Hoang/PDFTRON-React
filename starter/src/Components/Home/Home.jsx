import React from "react";
import { Button } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  tick = () => {
    this.setState((state) => {
      let newState = { ...state };
      newState.seconds = newState.seconds + 1;
      return newState;
    });
  };

  componentDidMount() {
    this.interval = setInterval;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <Button onClick={this.tick}>Click me</Button>

        <h1>{this.state.seconds}</h1>
      </React.Fragment>
    );
  }
}

export default Home;
