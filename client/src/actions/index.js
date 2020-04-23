import axios from 'axios';
import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
} from '../actions/types';

export const fetchComments = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/comments');
    dispatch({ type: FETCH_COMMENTS, payload: res.data });
  } catch (error) {
    throw error;
  }
};

export const createComment = (formValues, rerouteCallback) => async dispatch => {
  const res = await axios.post('http://localhost:3001/comments', formValues);
  dispatch({ type: CREATE_COMMENT, payload: res.data });
  rerouteCallback();
}

export const updateComment = ({ id, score }) => async dispatch => {
  try {
    console.log(score);
    const res = await axios.patch(`http://localhost:3001/comments/${id}`, { score });
    dispatch({ type: UPDATE_COMMENT, payload: res.data });
  } catch (error) {
    throw error;
  }
};
