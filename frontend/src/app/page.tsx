"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import styles from "./page.module.css";

export default function Page() {
  return <div className={styles.main}>
    <div>
            <Navbar/>
            <Link href="/pages">Create a Post</Link>
            <Link href="/home">Home</Link>
            <Link href="/login">Login</Link>
        </div>
  </div>
}
