import React, { Component } from "react";
import { DropZone } from "../lib";

class App extends Component {
  state = {
    jsonResult: null
  };

  render() {
    return (
      <div style={{ width: 640, margin: "15px auto" }}>
        <div>
          <DropZone
            getJson={jsonResult => {
              this.setState({ jsonResult });
            }}
          >
            <p>Add a file and see for yourself</p>
          </DropZone>
          {this.state.jsonResult ? (
            <div>{JSON.stringify(this.state.jsonResult)}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
