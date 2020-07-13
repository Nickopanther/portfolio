import React, { Component } from 'react';


class NickAzzarelloTitle extends Component {
  state = {
    img: require('../images/title.png')
  }
  render () {
    return (
        <img className="title-desktop"
          src={this.state.img}
          alt="Nick Azzarello"
          width="250"

          onMouseEnter={() => {
            this.setState({
              img: require('../images/title-yellow.png')
            })
          }}

          onMouseOut={() => {
            this.setState({
              img: require('../images/title.png')
            })
          }}

        />
    );
  }
}

export default NickAzzarelloTitle;
