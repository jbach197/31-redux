import React from 'react';
import CategoryForm from './category-form';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="category">

      <header>
        <CategoryForm handler={this.props.handleUpdate} cateogry={this.props.category} />
        <a href="#" onClick={()=>this.props.handleDestroy(this.props.category.id)}>X</a>
      </header>
      </div>
    );
  }
}
export default CategoryItem;