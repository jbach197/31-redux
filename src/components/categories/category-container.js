import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './category-form';
import CategoryList from './category-list';

import {categoryCreate, categoryUpdate, categoryDestroy} from '../../app/actions/categories';

class Categories extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="board">
        <CategoryForm handler={this.props.handleAddCategory} />
        <CategoryList handleDestroy={this.props.handleDestroyCategory} handleUpdate={this.props.handleUpdateCategory} cats={this.props.categories} />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleAddCategory: category => dispatch(categoryCreate(category)),
  handleUpdateCategory: category => dispatch(categoryUpdate(category)),
  handleDestroyCategory: category => dispatch(categoryDestroy(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);