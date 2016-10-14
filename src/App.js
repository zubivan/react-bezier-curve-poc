import React, { Component } from 'react';
import { BezierCurve } from './components/bezier-curve';
import { getBoundsOfCurve } from './components/utils';

class App extends Component {
  state = {
    origin: { x: 0, y: 0 },
    destination: { x: 300, y: 300 },
    controlPoint1: { x: 100, y: 100 },
    controlPoint2: { x: 300, y: 300 }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        origin: { x: 500 * Math.random(), y: 500 * Math.random() },
        destination: { x: 500 * Math.random(), y: 500 * Math.random() },
        controlPoint1: { x: 500 * Math.random(), y: 500 * Math.random() },
        controlPoint2: { x: 500 * Math.random(), y: 500 * Math.random() }
      });
    }, 1000);
  }

  render() {
    const {origin, destination, controlPoint1, controlPoint2} = this.state;

    var bounds = getBoundsOfCurve(origin.x, origin.y, controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, destination.x, destination.y);

    var style = {
      left: (bounds[0].x),
      top: (bounds[0].y),
      width: (bounds[1].x - bounds[0].x),
      height: (bounds[1].y - bounds[0].y)
    };

    return (
      <div>
        <div style={{ width: 500, height: 500, position: "relative", border: "1px lightgray solid" }}>
          <div style={{ border: "1px red solid", position: "absolute", ...style}}/>
          <BezierCurve origin={origin} destination={destination} controlPoint1={controlPoint1} controlPoint2={controlPoint2} />
        </div>
      </div>
    );
  }
}

export default App;
