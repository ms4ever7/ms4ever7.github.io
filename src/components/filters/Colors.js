import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

import { selectColor } from '../../redux/actions/filters';

const DEFAULT_CLASS_NAME = 'colors__list-item';
const COLORS_LIST = ['White', 'Black', 'Red', 'Grey', 'LightSeaGreen', 'Beige', 'Yellow', 'SpringGreen', 'Blue', 'DarkGreen', 'DarkBlue', 'Orange', 'Pink', "Brown", "Wheat" ]

class Colors extends Component {
  state = {
    colorsOpened: false
  }

  toggleColor = color => {
    this.props.selectColor(color);
  }

  get triggerElement() {
    const { colorsOpened } = this.state;
    const iconToShow = colorsOpened ? '-' : '+';

    return <div className='colors__wrapper--trigger layout layout-align-space-between-end'>
      <div className='colors__list-title'>Colors:</div>
      <div>{iconToShow}</div>
    </div>
  }

  get colors() {
    const { selectedColors } = this.props;

    return <Collapsible 
      trigger={this.triggerElement}
      onOpen={() => this.setState({ colorsOpened: true })} 
      onClose={() => this.setState({ colorsOpened: false })}
    >
      <div className='layout layout-wrap'>
        {COLORS_LIST.map((color, index) => {
          let className = DEFAULT_CLASS_NAME;

          if (selectedColors && selectedColors.length && selectedColors.includes(color)) {
            className = `${DEFAULT_CLASS_NAME} list-item--selected`
          }

          return <span
            key={index}
            className={className}
            style={{ backgroundColor: color }}
            onClick={() => this.toggleColor(color)}
          >
          </span>
        })}
      </div>
    </Collapsible>
  }

  render() {
    return (
      <div className='colors__wrapper'>
        {this.colors}
      </div>
    );
  }
}


const mapStateToProps = ({ filters }) => ({
  selectedColors: filters.selectedColors
});

const mapDispatchToProps = dispatch => ({
  selectColor: color => dispatch(selectColor(color))
});


export default connect(mapStateToProps, mapDispatchToProps)(Colors);