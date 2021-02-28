import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostID: null,
      error: false,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((x) => {
      const posts = x.data.slice(0, 4);
      const updatedPost = posts.map((x) => {
        return {
          ...x,
          author: "troias",
        };
      });

      this.setState({
        posts: updatedPost,
      });
    }).catch((err) => {
      this.setState({
        error: err
      })
    });
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostID: id
    });
  };

  render() {
    let posts = <p style={{TextAlign: 'center'}}>Somethng went wrong!</p>

    if (!this.state.error) {
       posts = this.state.posts.map((x) => {
        return (
          <Post
            key={x.id}
            title={x.title}
            author={x.author}
            clicked={() => this.postSelectedHandler(x.id)}
          />
        );
      });
    }


    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
