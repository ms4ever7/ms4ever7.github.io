import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import { selectCategory } from '../../redux/actions/filters';

const DEFAULT_CLASS_NAME = 'categories__list-item';
const CATEGORIES_LIST = ['Athletic', 'Fashion Sneakers', 'Boots', 'Oxfords'];

class Categories extends Component {
  static propTypes = {
    selectedCategories: PropTypes.array,
    selectCategory: PropTypes.func
  }

  static defaultProps = {
    selectedCategories: [],
    selectCategory: () => {}
  }

  state = {
    categoriesOpened: false
  }

  toggleCategory = (category) => {
    this.props.selectCategory(category);
  }

  get triggerElement() {
    const { categoriesOpened } = this.state;
    const iconToShow = categoriesOpened ? '-' : '+';

    return <div className='categories__wrapper--trigger layout layout-align-space-between-end'>
      <div className='categories__list-title'>Categories:</div>
      <div>{iconToShow}</div>
    </div>
  }

  get categories() {
    const { selectedCategories } = this.props;
    
    return <Collapsible 
      trigger={this.triggerElement}
      onOpen={() => this.setState({ categoriesOpened: true })} 
      onClose={() => this.setState({ categoriesOpened: false })}
      >
      {CATEGORIES_LIST.map((category, index) => {
        let className = DEFAULT_CLASS_NAME;

        if (selectedCategories && selectedCategories.length && selectedCategories.includes(category)) {
          className = `${DEFAULT_CLASS_NAME} list-item--selected`
        }

        return <div
          key={index}
          className={className}
          onClick={() => this.toggleCategory(category)}>
          {category}
        </div>
      })}
    </Collapsible>
  }

  render() {
    return (
      <div className='categories__wrapper'>
        {this.categories}
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  selectedCategories: filters.selectedCategories
});

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category))
});


export default connect(mapStateToProps, mapDispatchToProps)(Categories);