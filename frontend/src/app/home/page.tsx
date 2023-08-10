"use client"
import React from 'react'
import { useState,useEffect } from "react";
import BlogCard from '@/Components/Blogcard'
import styles from "./home.module.css"
import Link from 'next/link'
import Following from '@/Components/following'
import { useStateContext } from "@/context";
const home = () => {

  const arr = ["3","3","322"];
  const following = ["3","3","3"];

  const { address,connect,fetchblog,contract} = useStateContext();
  const [blogs, setblogs] = useState([]);

    const fetchblogs = async () => {
        const data = await fetchblog();
        console.log(data)
        setblogs(data);
      };
    
      useEffect(() => {
        if (contract) fetchblogs();
      }, [address, contract]);

  return (
    <div className={styles.home}>
      <div>
        <input type="text" placeholder="Search" className={styles.search}/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.blogs}>
        {blogs.map((blog) => {
            return <BlogCard
              blogData = {blog}
            />
        })}
        </div>
        <div className={styles.following}>
           <div className={styles.people}>
              {following.map((ele) => {
                return <Following/>
              })}
           </div>
           <div className={styles.createPost}>
           <Link href="/pages" >Create a post</Link>
           </div>
        </div>
      </div>
    </div>
  )
}

export default home
