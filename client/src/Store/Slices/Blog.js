import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  title: "",
  thumbnail: "",
  types: [],
  src: [],
  children: [],
  className: [],
  topics: [],
  h1: "",
  h2: "",
  para: "",
  image: "",
  timeToRead: "",
};

export const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    addImage: (state, action) => {
      if (action.payload.type === "submit") {
        return {
          ...state,
          src: state.src.concat(state.image),
          className: state.className.concat("blogImage"),
          types: state.types.concat("img"),
          children: state.children.concat(""),
          image: "",
        };
      } else {
        return {
          ...state,
          image: action.payload.value,
        };
      }
    },
    addTitle: (state, action) => {
      return {
        ...state,
        title: action.payload.value,
      };
    },
    addThumbnail: (state, action) => {
      return {
        ...state,
        thumbnail: action.payload.value,
      };
    },
    addTopics: (state, action) => {
      return {
        ...state,
        topics: action.payload.value,
      };
    },
    addTimeToRead: (state, action) => {
      return {
        ...state,
        timeToRead: action.payload.value,
      };
    },
    addH1: (state, action) => {
      if (action.payload.type === "submit") {
        console.log(state.h1);
        return {
          ...state,
          src: state.src.concat(""),
          className: state.className.concat("blogH1"),
          types: state.types.concat("h1"),
          children: state.children.concat(state.h1),
          h1: "",
        };
      } else {
        return {
          ...state,
          h1: action.payload.value,
        };
      }
    },
    addH2: (state, action) => {
      
      if (action.payload.type === "submit") {
        console.log(state.h2);
        return {
          ...state,
          src: state.src.concat(""),
          className: state.className.concat("blogH2"),
          types: state.types.concat("h2"),
          children: state.children.concat(state.h2),
          h2: "",
        };
      } else {
        return {
          ...state,
          h2: action.payload.value,
        };
      }
    },
    addPara: (state, action) => {
      
      if (action.payload.type === "submit") {
        console.log(state.para);
        return {
          ...state,
          src: state.src.concat(""),
          className: state.className.concat("blogPara"),
          types: state.types.concat("p"),
          children: state.children.concat(state.para),
          para: "",
        };
      } else {
        return {
          ...state,
          para: action.payload.value,
        };
      }
    },
  },
});

export default blogSlice.reducer;
