import React, { Component } from 'react';

class Station extends Component {
  state = {};

  render() {
    console.log(this.props);
    const { data, activeRadio } = this.props;
    return (
      <div className="container stations">
        <div className="station d-flex justify-content-between mx-auto">
          <ul className="w-100 pl-0">
            <li key={1}>
              {data.map(res => (
                <div
                  key={res.name}
                  className="w-100 d-flex justify-content-between list pt-2 pb-2"
                  onClick={e => {
                    e.preventDefault();
                    this.props.toggleRadio(res.name, res.image);
                  }}
                >
                  <span>{res.name}</span>
                  <span>{res.frequency}</span>
                </div>
              ))}

              {activeRadio && activeRadio.name && (
                <div className=" station-info d-flex justify-content-between p-2 mx-auto">
                  <div className="volume-control">
                    <button>
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                  {activeRadio && activeRadio.image && (
                    <img
                      className="mt-3"
                      src={activeRadio.image}
                      alt="station info"
                    />
                  )}
                  <div className="volume-control">
                    <button>
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Station;
