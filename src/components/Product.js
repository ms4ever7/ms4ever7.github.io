import React, { Component } from 'react';
import PropTypes from 'prop-types';
import convertColorNameToHex from 'convert-css-color-name-to-hex';


class Product extends Component {
  static propTypes = {
    data: PropTypes.object,
    setPrimaryItem: PropTypes.func
  }

  static defaultProps = {
    data: {},
    setPrimaryItem: () => {}
  }

  getColors = (colors, primaryColor, itemId) => colors.map((color, index) => {
    const DEFAULT_CLASS_NAME = 'item--color__block';
    let className = DEFAULT_CLASS_NAME;


    if (color.toLowerCase() === primaryColor.toLowerCase()) {
      className = `${DEFAULT_CLASS_NAME} selected`;
    }

    return <span
      key={index}
      className={className}
      style={{ backgroundColor: convertColorNameToHex(color) }}
      onClick={() => this.props.setPrimaryItem(color, itemId)}
    >
    </span>;
  });

  render() {
    const { data } = this.props;
    const {
      id, price, category, name, owner, primaryImageUrl, primaryColor, colors
    } = data;

    return (
      <div key={id} className='products__item'>
        <div className='products__item--image-container'>
          <img alt={name}
            className='products__item--image'
            src={primaryImageUrl}
          />
        </div>
        <div className='products__item--info-content layout-column layout-align-start-start'>
          <div className='item--category'>
            {category}
          </div>
          <div className='item--name'>
            {name}
            <div className='item--name-owner'>
              {owner}
            </div>
          </div>
          <div className='item--colors__wrapper'>
            {this.getColors(colors, primaryColor, id)}
          </div>
          <div className='item--price'>
            {price}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
