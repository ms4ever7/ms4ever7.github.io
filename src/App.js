
import React, { Component } from 'react';

import './styles/main.scss';

import Header from './components/Header';
import SpecialOffer from './components/SpecialOffer';
import Feed from './components/Feed';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SpecialOffer />
        <Feed />
        <Footer />
      </div>
    );
  }
}

export default App;
