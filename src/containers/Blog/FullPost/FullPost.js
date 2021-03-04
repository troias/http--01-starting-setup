import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";


class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPosts: null,
    };
  }

  componentDidMount() {
    this.loadData()
    
  }
  componentDidUpdate() {
    this.loadData()
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPosts ||
        (this.state.loadedPosts && this.state.loadedPosts.id !== +this.props.match.params.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
          .then((x) => {
            this.setState({
              loadedPosts: x.data,
            })
          }).catch(err => {
            // console.log(err)
          })
      }
    }
  }

  deleteHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
      .then((x) => {
        console.log(x);
      });
  };
 
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a post</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>loading</p>;
    }
    if ( this.state.loadedPosts ) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPosts.title}</h1>
          <p>{this.state.loadedPosts.body}</p>
          <div className="Edit">
            <button className="Delete" 
            onClick={this.deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
