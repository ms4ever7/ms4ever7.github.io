import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchProducts, setPrimaryItem } from '../redux/actions/products';

import NoResultsFound from './NoResultsFound';
import Product from './Product';

class Products extends Component {
  static propTypes = {
    products: PropTypes.array,
    selectedCategories: PropTypes.array,
    selectedColors: PropTypes.array,
    fetchProducts: PropTypes.func,
    setPrimaryItem: PropTypes.func
  }

  static defaultProps = {
    products: [],
    selectedCategories: [],
    selectedColors: [],
    fetchProducts: () => {}
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  get appropriateItems() {
    const { products, selectedCategories, selectedColors } = this.props;

    return products.filter((product) => {
      const { category, colors } = product;

      if ((selectedCategories.length && !selectedCategories.includes(category))
        || (selectedColors.length && !selectedColors.every(color => colors.includes(color)))) {
        return;
      }

      return product;
    });
  }


  get items() {
    const { selectedCategories, selectedColors, setPrimaryItem } = this.props;

    if (!this.appropriateItems.length) {
      return <NoResultsFound selectedCategories={selectedCategories} selectedColors={selectedColors} />;
    }

    return this.appropriateItems.map(item => <Product key={item.id} data={item} setPrimaryItem={setPrimaryItem} className='productItem' />);
  }

  render() {
    const { products } = this.props;

    if (!products || !products.length) {
      return null;
    }

    return (
      <div className='products__wrapper layout layout-align-center-start flex'>
        {this.items}
      </div>
    );
  }
}

const mapStateToProps = ({ products, filters }) => ({
  products: products.items,
  selectedCategories: filters.selectedCategories || [],
  selectedColors: filters.selectedColors || []
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  setPrimaryItem: (item, id) => dispatch(setPrimaryItem(item, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
