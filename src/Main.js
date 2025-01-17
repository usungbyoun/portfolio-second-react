import axios from "axios";
import React, { Component } from "react";
import Grid from "./Grid";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,    };
    this.getPosts = this.getPosts.bind(this);
    this.getPosts();
  }
  getPosts() {
    console.log("[*] getPosts");
    axios.get("http://localhost:8000/posts/").then((response) => {
      if (response.status < 300) {
        console.log(response.data.result);
        this.setState({
          posts: response.data.result,
        });
      }
    });
  }
  render() {
    console.log("[*] Main render");
    return (
      <div>
        <Grid posts={this.state.posts} />
      </div>
    );
  }
}

export default Main;

// console.log(this.props.posts);
// if (this.props.posts) {
//   return (
//     <div className="columns is-multiline">
//       {this.props.posts.map((post, index) => {
//         return <Card post={post} key={index} />;
//       })}
//     </div>
//   );
// }