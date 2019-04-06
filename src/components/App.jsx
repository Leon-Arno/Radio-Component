import React, { Component } from 'react';
import Header from './Header';
import Station from './Station';
import PlayingBar from './PlayingBar';
import axios from 'axios';

class App extends Component {
  state = {
    radioData: []
  };
  toggleRadio = (name, url) => {
    this.setState({
      activeRadio: {
        name: name,
        image: url
      }
    });
  };

  offRadio = () => {
    this.setState({
      activeRadio: {}
    });
  };
  componentDidMount() {
    let radioImages = ['RadioOne', 'RadioTwo', 'RadioThree', 'RadioFour'];

    axios.get('https://teclead.de/recruiting/radios').then(res => {
      res.data.radios.map((radio, index) => {
        radio.image = radio.image.replace('RadioOne', radioImages[index]);
        return radio;
      });
      this.setState({ radioData: res.data.radios });
      console.log(
        this.state.radioData
          .map(array => array.frequency)
          .reduce((accumulator, value) => accumulator + value, 0)
        // ! Life
      );
    });
  }

  render() {
    const { radioData, activeRadio } = this.state;
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <Header toggleRadio={this.toggleRadio} offRadio={this.offRadio} />
            <Station
              toggleRadio={this.toggleRadio}
              offRadio={this.offRadio}
              data={radioData}
              activeRadio={activeRadio}
            />
            <PlayingBar activeRadio={activeRadio} />;
          </div>
        </div>
      </div>
    );
  }
}

export default App;
