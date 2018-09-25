import React from 'react';

const NoResultsFound = ({ selectedCategories, selectedColors }) => <div className='no-results-found__wrapper layout-column layout-align-center-center'>
  <h2 className='no-results-found__title'>No Results Found</h2>
  <h3 className='no-results-found__subtitle'>
    Sorry, but there are no products with such a colors and categories.
    </h3>
</div>


export default NoResultsFound;