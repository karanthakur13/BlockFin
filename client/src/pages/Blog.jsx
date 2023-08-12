import React from "react";
import { useState } from "react";
import styles from "./blog.module.css";
import { useLocation } from "react-router";

const Blog = () => {
  const blogPosts = [];
  //     const router = useRouter();
  //   const query = router.;
  //   const name = query;
  //   console.log(name);
  const { state } = useLocation();
  console.log(state);

  for (let i = 0; i < state._tags.length; i++) {
    let blogPost;
    if (state._tags[i] == "img") {
      blogPosts.push(
        React.createElement("img", {
          className: state._children[i],
          src: state._src[i],
        })
      );
    } else {
      blogPosts.push(
        React.createElement(state._tags[i], {
          className: state._className[i],
          children: state._children[i],
        })
      );
    }
    blogPosts.push(blogPost);
  }

  return (
    <div>
      {blogPosts
        ? blogPosts.map((ele) => {
            return ele;
          })
        : null}
    </div>
  );
};

export default Blog;
