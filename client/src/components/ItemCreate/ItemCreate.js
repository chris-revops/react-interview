import React from 'react';
import { connect } from 'react-redux';

const ItemCreate = () => {
  return (
    <div className="item-create">
      <button className="ui button primary">Create Item</button>
    </div>
  );
};

export default connect()(ItemCreate);