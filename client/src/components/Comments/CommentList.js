import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comment-list.css';
import { fetchComments, updateComment } from '../../actions';

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderItems = () => {
    const { comments } = this.props;
    return comments.length && comments.map(comment => {
      const { id, text } = comment;
      const score = comment.score || 0;
      return (
        <li key={id}>
          <h5>{text}</h5>
          <div>
            <button onClick={() => this.props.updateComment({ id, score: score + 1 })}>Upvote</button>
            <span>{!!score === true ? score : ""}</span>
            <button onClick={() => this.props.updateComment({ id, score: score - 1 })}>Downvote</button>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="comment-list">
        <h3>Comments</h3>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = ({ comments }) => {
  return { comments: Object.values(comments) };
};

export default connect(mapStateToProps, { fetchComments, updateComment })(CommentList);
