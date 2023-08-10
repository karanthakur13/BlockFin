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
    types:string[],
    src:string[],
    children:string[],
    className:string[],
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
        types:[],
        src:[],
        children:[],
        className:[],
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
                    src:state.src.concat(state.image),
                    className:state.className.concat("blogImage"),
                    types:state.types.concat("img"),
                    children:state.types.concat(""),
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
                    src:state.src.concat(""),
                    className:state.className.concat("blogH1"),
                    types:state.types.concat("h1"),
                    children:state.types.concat(state.h1),
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
                    src:state.src.concat(""),
                    className:state.className.concat("blogH2"),
                    types:state.types.concat("h2"),
                    children:state.types.concat(state.h2),
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
                    src:state.src.concat(""),
                    className:state.className.concat("blogPara"),
                    types:state.types.concat("p"),
                    children:state.types.concat(state.para),
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