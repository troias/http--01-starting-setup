import React from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.module.css'
import { Route } from 'react-router';
import FullPost from '../FullPost/FullPost'



class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],

        }
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
            console.log(err)
            // this.setState({
            //     error: err
            // })
        });
    }

    postSelectedHandler = (id) => {
        this.props.history.push( '/posts/' + id );
    };

    render() {

        let posts = <p style={{ TextAlign: 'center' }}>Somethng went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map((x) => {
                return (
                    // <Link
                    //     to={'/' + x.id}
                    //     key={x.id}
                    // >
                    <Post
                        key={x.id}
                        title={x.title}
                        author={x.author}
                        clicked={() => this.postSelectedHandler(x.id)}
                    />
                    /* </Link> */
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route
                    path={this.props.match.url + '/:id'}
                    exact
                    component={FullPost}
                />
            </div>

        )
    }
}

export default Posts




