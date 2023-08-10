import React from "react";
import { useState } from "react";
import styles from "./page.module.css"


type BlogProps = {
    blog: {
        types: string[];
        children: string[];
        src: string[];
        className: string[];
    };
};


const Blog = (props:BlogProps) => {

    const blogPosts = [];

    for (let i = 0; i < props.blog.types.length; i++) {
        let blogPost;
        if(props.blog.types[i] == "img"){
            blogPosts.push(React.createElement('img',{className:props.blog.children[i],src:props.blog.src[i]}));
        }else{
            blogPosts.push(React.createElement(props.blog.types[i],{className:props.blog.className[i],children:props.blog.children[i]}));
        }
        blogPosts.push(blogPost);
    }

    return (
        <div>
            {blogPosts.map((ele) => {
                return ele;
            })}
        </div>
    )
}

export default Blog;