import React, { Fragment, Component } from 'react';

class Header extends Component {
  render() {
    const { offRadio } = this.props;
    return (
      <Fragment>
        <div className="radio-app mx-auto ">
          <div className="header d-flex justify-content-between pt-3 pb-3">
            <button className="power-btn">
              <i className="fas fa-chevron-left" />
            </button>
            <h4 className="title">Stations</h4>
            <button
              className="power-btn"
              onClick={e => {
                e.preventDefault();
                offRadio();
              }}
            >
              <i className="fas fa-power-off" />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
