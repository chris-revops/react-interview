import React from 'react';
import { connect } from 'react-redux';
import './item-create.css';
import { createItem } from '../../actions';

const ItemCreate = (props) => {
  return (
    <div className="item-create">
      <button onClick={() => props.createItem({ name: 'Item One', description: 'a regular item' })} className="ui button primary">Create Item</button>
    </div>
  );
};

export default connect(null, { createItem })(ItemCreate);