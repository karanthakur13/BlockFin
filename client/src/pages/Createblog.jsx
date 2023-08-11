import React from "react";
import styles from "./page.module.css";
import { blogSlice } from "../Store/Slices/Blog";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import Widget from "../Components/Widget";
import { useStateContext } from "../context";
import Navbar from "../Components/Navbar";

const Createblog = () => {
  const { publishBlog, connect, address } = useStateContext();
  const blogMeta = useSelector((state) => state.blogReducer);
  const widgetState = useSelector((state) => state.widgetReducer);
  const dispatch = useDispatch();
  const [topics, setTopics] = useState([]);

  const toSend = {
    title: blogMeta.title,
    types: blogMeta.types,
    className: blogMeta.className,
    children: blogMeta.children,
    src: blogMeta.src,
    topics: blogMeta.topics,
    thumbnail: blogMeta.thumbnail,
    timeToRead: blogMeta.timeToRead,
  };

  let actualRender=[];
  for(let i=0;i<blogMeta.types.length;i++){
    console.log({type:blogMeta.types[i],
      children:blogMeta.children[i],
      className:blogMeta.className[i],
      src:blogMeta.src[i]});
    actualRender.push({
      type:blogMeta.types[i],
      children:blogMeta.children[i],
      className:blogMeta.className[i],
      src:blogMeta.src[i]
    })
  }
  const handleBlogSumbit = async () => {
    await connect();
    const data = await publishBlog(toSend);
    const num = data.receipt.events[0].args.index;
  };

  const handleTitleChange = (e) => {
    console.log(blogMeta.title);
    dispatch(
      blogSlice.actions.addTitle({ type: "change", value: e.target.value })
    );
  };
  const handleThumbnailChange = (e) => {
    dispatch(
      blogSlice.actions.addThumbnail({ type: "change", value: e.target.value })
    );
  };
  const handleImageChange = (e) => {
    dispatch(
      blogSlice.actions.addImage({ type: "change", value: e.target.value })
    );
  };
  const handleParaChange = (e) => {
    dispatch(
      blogSlice.actions.addPara({ type: "change", value: e.target.value })
    );
  };
  const handleH1Change = (e) => {
    dispatch(
      blogSlice.actions.addH1({ type: "change", value: e.target.value })
    );
  };
  const handleH2Change = (e) => {
    dispatch(
      blogSlice.actions.addH2({ type: "change", value: e.target.value })
    );
  };
  const handleTimeToReadChange = (e) => {
    dispatch(
      blogSlice.actions.addTimeToRead({ type: "change", value: e.target.value })
    );
  };
  const handleNewTopicsAdd = (e) => {
    setTopics((prev) => {
      return prev.push({ type: "change", value: e.target.value });
    });
  };

  const handleAddH1 = () => {
    dispatch(blogSlice.actions.addH1({ type: "submit", value: "" }));
  };
  const handleAddH2 = () => {
    dispatch(blogSlice.actions.addH2({ type: "submit", value: "" }));
  };
  const handleAddPara = () => {
    dispatch(blogSlice.actions.addPara({ type: "submit", value: "" }));
  };
  const handleAddImage = () => {
    dispatch(blogSlice.actions.addImage({ type: "submit", value: "" }));
  };

  return (
    <div className={styles.wrapper}>
      <Navbar/>
    <div className={styles.blogWrite}>
      <div className={styles.blogWriteInner}>
        <div className={styles.thumbnail}>
          <h1>Add a Thumbnail Image</h1>
          <label htmlFor="thumbnail">
            <svg
              width="45"
              height="43"
              viewBox="0 0 45 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 2.00001C24 1.6287 23.842 1.27261 23.5607 1.01006C23.2794 0.747506 22.8978 0.600006 22.5 0.600006C22.1022 0.600006 21.7206 0.747506 21.4393 1.01006C21.158 1.27261 21 1.6287 21 2.00001V20.2H1.5C1.10218 20.2 0.720645 20.3475 0.43934 20.6101C0.158036 20.8726 0 21.2287 0 21.6C0 21.9713 0.158036 22.3274 0.43934 22.59C0.720645 22.8525 1.10218 23 1.5 23H21V41.2C21 41.5713 21.158 41.9274 21.4393 42.19C21.7206 42.4525 22.1022 42.6 22.5 42.6C22.8978 42.6 23.2794 42.4525 23.5607 42.19C23.842 41.9274 24 41.5713 24 41.2V23H43.5C43.8978 23 44.2794 22.8525 44.5607 22.59C44.842 22.3274 45 21.9713 45 21.6C45 21.2287 44.842 20.8726 44.5607 20.6101C44.2794 20.3475 43.8978 20.2 43.5 20.2H24V2.00001Z"
                fill="#8D99FF"
              />
            </svg>
          </label>
          <input
            type="text"
            accept=".jpeg"
            id="thumbnail"
            onChange={handleThumbnailChange}
          />
        </div>
        <div className={styles.title}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            value={blogMeta.title}
          />
        </div>
        <label>Blog</label>
        <div className={styles.blogWidget}>
          {widgetState.para ? (
            <div className={styles.widgetInput}>
              <input
                type="text"
                onChange={handleParaChange}
                name="para"
                placeholder="Paragraph"
              />
              <button onClick={handleAddPara}>Add</button>
            </div>
          ) : null}
          {widgetState.img ? (
            <div className={styles.widgetInput}>
              <input type="text" onChange={handleImageChange} name="Image" placeholder="Image URL" />
              <button onClick={handleAddImage}>Add</button>
            </div>
          ) : null}
          {widgetState.h1 ? (
            <div className={styles.widgetInput}>
              <input type="text" onChange={handleH1Change} name="h1" placeholder="h1" />
              <button onClick={handleAddH1}>Add</button>
            </div>
          ) : null}
          {widgetState.h2 ? (
            <div className={styles.widgetInput}>
              <input type="text" onChange={handleH2Change} name="h2" placeholder="h2"/>
              <button onClick={handleAddH2}>Add</button>
            </div>
          ) : null}
          <Widget />
        </div>
        {actualRender
          ? actualRender.map((ele) => {
              if (ele.type == "img") {
                return React.createElement(ele.type,{className:ele.className,src:ele.src});
              }
              return React.createElement(ele.type,{className:ele.className},ele.children);
            })
          : null}
        <button onClick={handleBlogSumbit} className={styles.blogButton}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Createblog;
