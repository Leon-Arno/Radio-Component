import React, { Fragment, Component } from 'react';

class PlayingBar extends Component {
  render() {
    const { activeRadio } = this.props;
    return (
      <Fragment>
        <div className="container mx-auto play-bar">
          <p style={{ color: '#f8a951' }}>
            <b>NOW PLAYING</b>
          </p>
          <p className="radio-name">{activeRadio && activeRadio.name}</p>
        </div>
        <p className="footer text-center">A Developer Radio</p>
      </Fragment>
    );
  }
}
export default PlayingBar;
