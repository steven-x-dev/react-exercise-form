import React from 'react';
import './Banner.css';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      top: -30
    }
  }

  show = () => {
    const { delay, stay } = this.props;
    for (let i = 1; i <= 100; i++) {
      (function(i) {
        setTimeout(function() {
          this.setState({
            top: -30+0.3*i
          });
        }, i * delay);
      })(i);
    }

    let initTime = 100 * delay + 1 + stay;
    for (let i = 1; i <= 100; i++) {
      (function(i) {
        setTimeout(function() {
          this.setState({
            top: -0.3*i
          });
        }, initTime + i * delay);
      })(i);
    }
  };

  render() {
    const { message } = this.props;
    return (
      <div id='banner'>
        <span
          id='bannerMsg'
          style={{ top: this.state.top }}>
          {message}
        </span>
      </div>
    );
  }
}

export default Banner;