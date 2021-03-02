import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts'
import { Route } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {




    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a> </li>
              <li><a href="/new">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() =>
          <Posts />
        } />
        <Route path="/new" exact render={() =>
          <NewPost />
        } />
      </div>
    );
  }
}

export default Blog;
