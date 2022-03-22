import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Admin"
    };
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
    //console.log("Mount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    //console.log("UnMount");
  }

  render() {
    return (
      <div>
        <h1>Hello World {this.state.name}</h1>
        {/* {console.log("Render")} */}
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
