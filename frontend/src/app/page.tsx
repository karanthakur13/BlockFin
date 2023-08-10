"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return <div>
    <div>
            <Link href="/pages">Create a Post</Link>
            <Link href="/home">Home</Link>

        </div>
  </div>
}
