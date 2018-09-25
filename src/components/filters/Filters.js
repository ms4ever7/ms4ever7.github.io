import React, { Component } from 'react';
import { connect } from 'react-redux';

import Categories from './Categories';
import Colors from './Colors';

import { resetFilters } from '../../redux/actions/filters';

class Filters extends Component {
  render() {
    return (
      <div className='filters__wrapper layout-column layout-align-start-start'>
        <Categories />
        <Colors />
        <div className='filters__reset-button' onClick={this.props.resetFilters}>Reset all filters</div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters())
});


export default connect(mapStateToProps, mapDispatchToProps)(Filters);