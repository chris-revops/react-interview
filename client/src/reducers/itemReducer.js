import _ from 'lodash';
import {
  FETCH_ITEMS,
  FETCH_ITEM,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_ITEM:
      return { ...state, [action.payload.id]:action.payload };
    case CREATE_ITEM:
      return { ...state, [action.payload.id]:action.payload };
    case DELETE_ITEM:
      return _.omit(state, action.payload);
    case UPDATE_ITEM:
      return { ...state, [action.payload.id]:action.payload };
    default:
      return state;
  }
};