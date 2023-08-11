import React from "react";
import { useState, useEffect } from "react";
import BlogCard from "../Components/Blogcard";
import styles from "./home.module.css";
import Following from "../Components/Following";
import { useStateContext } from "../context";
import {Link} from 'react-router-dom';
import Navbar from "../Components/Navbar";
const Home = () => {
  const following = ["3", "3", "3"];

  const { address, connect, fetchblog, contract } = useStateContext();
  const [blogs, setblogs] = useState([]);

  const fetchblogs = async () => {
    const data = await fetchblog();
    console.log(data[0]);
    const tempArr =[]
    for(let i=0;i<data.length;i++){
      let text="";
      for(let j=0;j<data[i]._tags.length;j++){
        if(data[i]._tags[j] === 'p'){
          text = data[i]._children[j];
          break;
        }
      }
      console.log(text);
      tempArr.push({
        ...data[i],
        text:text
      })
    }
    setblogs(tempArr);
    
  };

  useEffect(() => {
    if (contract) fetchblogs();
  }, [address, contract]);

  return (
    <div className={styles.home}>
      <Navbar/>
      <div>
        <input type="text" placeholder="Search" className={styles.search} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.blogs}>
          <h1>Trending</h1>
          {blogs.map((blog) => {
            return <BlogCard blogData={blog} />;
          })}
        </div>
        <div className={styles.following}>
          <h1>Following</h1>
          <div className={styles.people}>
            {following.map((ele) => {
              return <Following />;
            })}
          </div>
          <div className={styles.createPost}>
            <Link to="/Createblog">Create a Post</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
