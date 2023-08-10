import React from 'react'
import BlogCard from '@/Components/Blogcard'
import styles from "./home.module.css"
import Link from 'next/link'
import Following from '@/Components/following'
const home = () => {

  const arr = ["3","3","322"];
  const following = ["3","3","3"];
  return (
    <div className={styles.home}>
      <div>
        <input type="text" placeholder="Search" className={styles.search}/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.blogs}>
          {arr.map((ele) => {
          return <BlogCard/>
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
