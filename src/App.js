import React, { Component } from 'react';
import { BezierCurve } from './components/bezier-curve';

class App extends Component {
  state = {
    origin: { x: 0, y: 0 },
    destination: { x: 300, y: 300 },
    controlPoint1: { x: 100, y: 100 },
    controlPoint2: { x: 300, y: 300 }
  }

  render() {
    const {origin, destination, controlPoint1, controlPoint2} = this.state;

    return (
      <div>
        <div style={{ width: 500, height: 500, position: "relative", border: "1px lightgray solid" }}>
          <BezierCurve origin={origin} destination={destination} controlPoint1={controlPoint1} controlPoint2={controlPoint2} />
        </div>
      </div>
    );
  }
}

export default App;
