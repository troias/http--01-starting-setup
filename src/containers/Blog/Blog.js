import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts'
import { Route, NavLink } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import { withRouter } from 'react-router-dom'
import FullPost from './FullPost/FullPost'

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
              <li><NavLink to="/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: "gold" ,
                  textDecoration: "underline"
                }}>Home</NavLink> </li>
              <li><NavLink to={{
                pathname: '/new',
                hash: '#submit',
                search: '?'
              }} exact
                activeClassName="my-active"
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new"  exact component={NewPost} />
        <Route path="/:dynamicValue" exact component={FullPost} />

      </div>
    );
  }
}

export default withRouter(Blog);
