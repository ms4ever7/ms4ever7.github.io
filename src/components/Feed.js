
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filters from './filters/Filters';
import Products from './Products';

class Feed extends Component {
  render() {
    return (
      <div className='feed__container layout layout-align-center-start'>
        <Filters />
        <Products />
      </div>
    );
  }
}


export default Feed;