import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { stat } from 'fs';
import React from 'react';

type PayLoadType = {
    type:string,
    value:string
}

type PayLoadArray = {
    type:string,
    value:string[]
}

type BlogValue = {
    title:string,
    thumbnail:string,
    blog:React.ReactElement[],
    topics:string[],
    h1:string,
    h2:string,
    para:string,
    image:string,
    timeToRead:string,
}

const initialState  = {
        title:"",
        thumbnail:"",
        blog:[React.createElement('div')],
        topics:[],
        h1:"",
        h2:"",
        para:"",
        image:"",
        timeToRead:""
} as BlogValue;

export const blogSlice = createSlice({
    name:"Blog",
    initialState,
    reducers:{
        addImage : (state,action:PayloadAction<PayLoadType>) => {
            if(action.payload.type === "submit"){
                return {
                    ...state,
                    blog:state.blog.concat(React.createElement("img",{src:state.image})),
                    image:""
                }
            }
            else{
                return {
                    ...state,
                    image:action.payload.value
                }
            }
        },
        addTitle : (state,action:PayloadAction<PayLoadType>) => {
            return {
                ...state,
                title:action.payload.value
            }
        },
        addThumbnail : (state,action:PayloadAction<PayLoadType>) => {
            return {
                ...state,
                thumbnail:action.payload.value
            }
        },
        addTopics : (state,action:PayloadAction<PayLoadArray>) => {
            return {
                ...state,
                topics:action.payload.value
            }
        },
        addTimeToRead : (state,action:PayloadAction<PayLoadType>) => {
            return {
                ...state,
                timeToRead:action.payload.value
            }
        },
        addH1 : (state,action:PayloadAction<PayLoadType>) => {
            if(action.payload.type === "submit"){
                return {
                    ...state,
                    blog:state.blog.concat(React.createElement("h1",{className:"h1"},state.h1)),
                    h1:""
                }
            }else{
                return {
                    ...state,
                    h1:action.payload.value
                }
            }
            
        },
        addH2 : (state,action:PayloadAction<PayLoadType>) => {
            if(action.payload.type === "submit"){
                return {
                    ...state,
                    blog:state.blog.concat(React.createElement("h2",{className:"h2"},state.h2)),
                    h2:""
                }
            }
            else{
                return {
                    ...state,
                    h2:action.payload.value
                }
            }
            
        },
        addPara : (state,action:PayloadAction<PayLoadType>) => {
            
            if(action.payload.type === "submit"){
                console.log(state.para);
                return {
                    ...state,
                    blog:state.blog.concat(React.createElement("p",{className:"para"},state.para)),
                    para:""
                }
            }else{
                return {
                    ...state,
                    para:action.payload.value
                }
            }
            
        }
    }
});

export default blogSlice.reducer;