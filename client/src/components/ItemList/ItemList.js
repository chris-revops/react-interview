import React, { Component } from 'react';
import { connect } from 'react-redux';
import './item-list.css';
import { fetchItems } from '../../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    console.log(this.props.items);
    return <div className="item-list">Item List</div>;
  }
};

const mapStateToProps = ({ items }) => {
  return { items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);