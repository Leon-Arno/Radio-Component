import React, { Fragment, Component } from 'react';
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
    console.log('hello');
    this.setState({
      activeRadio: {}
    });
  };
  componentDidMount() {
    axios.get('https://teclead.de/recruiting/radios').then(res => {
      this.setState({ radioData: res.data.radios });
    });
  }

  render() {
    const { radioData, activeRadio } = this.state;
    return (
      <Fragment>
        <Header toggleRadio={this.toggleRadio} offRadio={this.offRadio} />
        <Station
          toggleRadio={this.toggleRadio}
          offRadio={this.offRadio}
          data={radioData}
          activeRadio={activeRadio}
        />
        ;
        <PlayingBar activeRadio={activeRadio} />;
      </Fragment>
    );
  }
}

export default App;