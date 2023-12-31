"use client"
import React from "react";
import { useState,useEffect } from "react";
import styles from "./blogCard.module.css"
import { useStateContext } from "@/context";
import Link from "next/link";

const BlogCard = (props:any) => {
    
    const [string,setString] = useState("Any sustainable business must achieve two things: a way to attract and convert new customers to the product, and a way to retain existing ones. As time goes on, in a perfect world, we’d be serving both of these customer segments with an ever-improving value proposition.But as anyone who has released or sold a product before knows, this is never the path actually taken. At any given stage, no matter how straight you hope to trek, you’re always over-serving the requests of one of these two cohorts. And as a result, you’re always under-serving the requests of the other. In actuality, the path looks like this:")
    return (
        <div className={styles.blogCard}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <p>{props.blogData.publisher}</p>
                    <button>Save</button>
                </div>
                <h1>{props.blogData.title}</h1>
                <p>{string.length>200?string.slice(0,200):string}</p>
                <Link href={{
                    pathname:'./blog',
                    query:props.blogData.ID
                }}>More</Link>
            </div>
        </div>
    )
}

export default BlogCard;