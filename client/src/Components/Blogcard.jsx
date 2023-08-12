"use client";
import React from "react";
import styles from "./blogCard.module.css";
import axios from "axios";
import { log } from "console";
import { useRewardContext } from "../context/reward";
import { useNavigate } from "react-router";

const BlogCard = (props) => {
  const navigate = useNavigate();
  const { Reward, contract } = useRewardContext();
  const handleCoins = async (e) => {
    /* console.log(props.blogData);
    const val = e.target.value;
    await axios
      .post(
        "http://localhost:5001/api/scoreUpdate",
        {
          metaID: props.blogData.publisher,
          blogID: props.blogData.ID,
          vote: val,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      }); */

    const data = await Reward(props.blogData.publisher, 1);
  };
  const handleNavigate = () => {
    navigate("/Blog", { state: props.blogData });
  };

  return (
    <div className={styles.blogCard}>
      <div className={styles.left}>
        <div className={styles.top}>
          <p>{props.blogData.publisher}</p>
        </div>
        <h2>{props.blogData.title}</h2>
        <p>{props.blogData.text}</p>
        <button onClick={handleCoins} value={1}>
          upvote
        </button>
        <button value={0}>downvote</button>
        <button onClick={handleNavigate}>more</button>
      </div>
    </div>
  );
};

export default BlogCard;
