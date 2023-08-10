"use client"
import React from "react"
import { blogSlice } from "@/Store/Slices/Blog"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/Store/Store"
import { useState } from "react";
import Widget from "@/Components/Widget";


const BlogForm = () => {

    const blog = useAppSelector((state) => state.blogReducer.blog);
    const blogMeta = useAppSelector((state) => state.blogReducer);
    const widgetState = useAppSelector((state) => state.widgetReducer);
    const dispatch = useDispatch();
    const [topics,setTopics] = useState([]);

    const toSend = JSON.stringify({
        title:blogMeta.title,
        thumbnail:blogMeta.thumbnail,
        timeToRead:blogMeta.timeToRead,
        date:new Date(),
        blog:blog
    });


    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(blogMeta.title);
        dispatch(blogSlice.actions.addTitle({type:"change",value:e.target.value}));
    }
    const handleThumbnailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(blogSlice.actions.addThumbnail({type:"change",value:e.target.value}));
    }
    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // dispatch(blogSlice.actions.addImage(e.target.value));
    }
    const handleParaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(blogSlice.actions.addPara({type:"change",value:e.target.value}));
    }
    const handleH1Change = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(blogSlice.actions.addH1({type:"change",value:e.target.value}));
    }
    const handleH2Change = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(blogSlice.actions.addH2({type:"change",value:e.target.value}));
    }
    const handleTimeToReadChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(blogSlice.actions.addTimeToRead({type:"change",value:e.target.value}));
    }
    const handleNewTopicsAdd = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTopics((prev:any) => {
            return prev.push({type:"change",value:e.target.value});
        });
    }

    const handleAddH1 = () => {
        dispatch(blogSlice.actions.addH1({type:"submit",value:""}));
    }
    const handleAddH2 = () => {
        dispatch(blogSlice.actions.addH2({type:"submit",value:""}));
    }
    const handleAddPara = () => {
        dispatch(blogSlice.actions.addPara({type:"submit",value:""}));
        console.log(blog);
    }
    const handleAddImage = () => {
        dispatch(blogSlice.actions.addImage({type:"submit",value:""}));
    }

    return (
        <div>
            <input type="file" accept=".jpeg" onChange={handleThumbnailChange}/>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleTitleChange} value={blogMeta.title}/>
            <Widget/>
            {widgetState.para?<div><input type="text" onChange={handleParaChange} name='para' placeholder="Paragraph"/><button onClick={handleAddPara}>Add</button></div>:null}
            {widgetState.img?<div><input type="file" onChange={handleImageChange} name='Image'/><button onClick={handleAddImage}>Add</button></div>:null}
            {widgetState.h1?<div><input type="text" onChange={handleH1Change} name='h1'/><button onClick={handleAddH1}>Add</button></div>:null}
            {widgetState.h2?<div><input type="text" onChange={handleH2Change} name='h2'/><button onClick={handleAddH2}>Add</button></div>:null}
            {blog?
            blog.map((ele:React.ReactElement) => 
            {   console.log(ele);
                return React.createElement(ele.type,ele.props);
            })
            :null}
            <button>Submit</button>
        </div>
    )
}

export default BlogForm