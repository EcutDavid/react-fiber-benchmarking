require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

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
        scale += 0.02;
        if (scale >= 2) isIncScale = !isIncScale;
      } else {
        scale -= 0.02;
        if (scale <= 0.01) isIncScale = !isIncScale;
      }
      this.setState({ scale, isIncScale })
    }, 10);
  }

  renderBalls(number, count) {
    if (number < 0) return <span />;
    return (
      <div>
        {[...Array(count)].map((d, i) =>
          <Ball style={{ width: number / 5, height: number / 5 }} key={i}/>
        )}
        {this.renderBalls(number - 0.5, count + 3)}
      </div>
    )
  }

  calcDOMCount(count) {
    let times = count * 2;
    let result = 0;
    while (times--) {
      result += times * 3 + 1;
    }
    return result;
  }

  render() {
    const { scale } = this.state;
    const count = 70;
    return (
      <div className="index" style={{transform: `scaleX(${scale})`}}>
        {this.calcDOMCount(count)}
        {this.renderBalls(70, 1)}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
