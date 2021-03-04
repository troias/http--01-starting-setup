import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
import { withRouter } from 'react-router-dom'
const AsyncNewPosts = asyncComponent(() => {
  return import('./NewPost/NewPost')
})

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true
    };
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: "gold",
                  textDecoration: "underline"
                }}>Posts</NavLink> </li>
              <li><NavLink
                to={{
                  pathname: '/new',
                  hash: '#submit',
                  search: '?'
                }} exact
                activeClassName="my-active"
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new" exact component={AsyncNewPosts} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1> component not found</h1>} />
          // /* <Redirect from="/" to='/posts' /> */
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
