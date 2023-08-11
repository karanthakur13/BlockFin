"use client";
import React from "react";
import styles from "./blogCard.module.css";
import axios from 'axios';
import { log } from "console";

const BlogCard = (props) => {

  const handleCoins = async (e) =>  {
    console.log(props.blogData);
    const val = e.target.value;
    await axios.post("http://localhost:5001/api/scoreUpdate",{
      metaID:props.blogData.publisher,
      blogID:props.blogData.ID,
      vote:val
    },{
      headers:{
        "Content-Type":"application/json"
      },
    }).then((res) => {
      res.json();
    }).then(data => {
      console.log(data);
    });
  }

  return (
    <div className={styles.blogCard}>
      <div className={styles.left}>
        <div className={styles.top}>
          <p>{props.blogData.publisher}</p>
        </div>
        <h2>{props.blogData.title}</h2>
        <p>{props.blogData.text}</p>
        <button onClick={handleCoins} value={1}>upvote</button>
        <button onClick={handleCoins} value={0}>downvote</button>
      </div>
    </div>
  );
};

export default BlogCard;
