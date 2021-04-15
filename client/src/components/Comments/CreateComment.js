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
      <div className="create-comment ">
        <div className="ui labeled input">
          <div class="ui label">Add Comment</div>
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
        <button
          id="creat-comment_btn"
          onClick={this.createComment}
          className="small ui button primary "
        >
          Add Comment
        </button>
      </div>
    );
  }
}

export default connect(null, { createComment })(CreateComment);
