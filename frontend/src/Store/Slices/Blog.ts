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

type blog = {
    _type:string,
    _className:string,
    _children:string,
    _src:string
}
type BlogValue = {
    title:string,
    thumbnail:string,
    blog:blog[],
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
        blog:[],
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
                    blog:state.blog.concat({_type:"img",_className:"blogImage",_children:"",_src:state.image}),
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
                    blog:state.blog.concat({_type:"h1",_className:"blogH1",_children:state.h1,_src:""}),
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
                    blog:state.blog.concat({_type:"h2",_className:"blogH2",_children:state.h2,_src:""}),
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
                    blog:state.blog.concat({_type:"p",_className:"blogPara",_children:state.para,_src:""}),
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