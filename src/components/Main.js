require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
const levelCount = 18;
const INC_EACH_LEVEL = 4;

class Ball extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <div style={style} className="Ball"></div>
    )
  }
}

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { scale: 1, isIncScale: false };
    setInterval(() => {
      let { scale, isIncScale } = this.state;
      if (isIncScale) {
        scale += 0.05;
        if (scale >= 2) isIncScale = !isIncScale;
      } else {
        scale -= 0.05;
        if (scale <= 0.01) isIncScale = !isIncScale;
      }
      this.setState({ scale, isIncScale })
    }, 50);
  }

  renderBalls(size, counter) {
    if (size < 0) return <span />;
    return (
      <div>
        {[...Array(counter)].map((d, i) =>
          <Ball
            style={{
              width: size * size / levelCount * 2,
              height: size * size / levelCount * 2,
              transform: `rotateY(${Date.now() / 30}deg)`
            }}
            key={i}
          />
        )}
        {this.renderBalls(size - 1, counter + INC_EACH_LEVEL)}
      </div>
    )
  }

  calcDOMCount(levelCount) {
    let times = levelCount * 2;
    let result = 0;
    while (times--) {
      result += times * INC_EACH_LEVEL + 1;
    }
    return result;
  }

  render() {
    const { scale } = this.state;
    return (
      <div>
        <p>Node Count: {this.calcDOMCount(levelCount)}</p>
        <div className="index" style={{transform: `scaleX(${scale})`}}>
          {this.renderBalls(levelCount, 1)}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

// The main thread's work
let counter = 0;
setInterval(() => {
  document.querySelector('#spinner').style.transform = `rotate(${counter * 1}deg)`;
}, 5);