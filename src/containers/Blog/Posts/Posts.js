import React from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import classes from './Posts.module.css'

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
        this.setState({
            selectedPostID: id
        });
    };

    render() {

        let posts = <p style={{ TextAlign: 'center' }}>Somethng went wrong!</p>

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
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts

