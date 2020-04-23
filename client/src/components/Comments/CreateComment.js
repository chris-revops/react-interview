import React, { Component } from "react";
import { connect } from "react-redux";
import "./create-comment.css";
import { createComment } from "../../actions";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  createComment = () => {
    const reroute = () => this.props.history.push("/comments");
    this.props.createComment(this.state, reroute);
  };

  render() {
    return (
      <div className="create-comment">
        <label>Add Comment</label>
        <input
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <button onClick={this.createComment} className="ui button primary">
          Add Comment
        </button>
      </div>
    );
  }
}

export default connect(null, { createComment })(CreateComment);
