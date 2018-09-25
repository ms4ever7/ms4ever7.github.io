import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../redux/actions/products';

import NoResultsFound from './NoResultsFound';
import Product from './Product';

class Products extends Component {
  state = {

  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  get appropriateItems() {
    const { products, selectedCategories, selectedColors } = this.props;

    return products.filter(product => {
      const { category, colors } = product

      if ((selectedCategories.length && !selectedCategories.includes(category))
        || (selectedColors.length && !selectedColors.every(color => colors.includes(color)))) {
        return;
      }
        
      return product;
    });
    
  }


  get items() {
    const { selectedCategories, selectedColors } = this.props;

    if (!this.appropriateItems.length) {
      return <NoResultsFound selectedCategories={selectedCategories} selectedColors={selectedColors} />;
    }

    return this.appropriateItems.map(item => <Product key={item.id} data={item} />);
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
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);