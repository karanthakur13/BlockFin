import React from "react";
import { useState } from "react";
import styles from "./blog.module.css"


const Blog = (props) => {

    const blogPosts = [];
//     const router = useRouter();
//   const query = router.;
//   const name = query;
//   console.log(name);
  

    for (let i = 0; i < props.blog._types.length; i++) {
        let blogPost;
        if(props.blog._types[i] == "img"){
            blogPosts.push(React.createElement('img',{className:props.blog._children[i],src:props.blog._src[i]}));
        }else{
            blogPosts.push(React.createElement(props.blog._types[i],{className:props.blog._className[i],children:props.blog._children[i]}));
        }
        blogPosts.push(blogPost);
    }

    return (
        <div>
            {blogPosts?blogPosts.map((ele) => {
                return ele;
            }):null}
        </div>
    )
}

export default Blog;