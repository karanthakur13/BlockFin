import { createSlice } from "@reduxjs/toolkit";


type InitialState = {
    img:boolean,
    h1:boolean,
    h2:boolean,
    para:boolean
}

const initialState = {
    img:false,
    h1:false,
    h2:false,
    para:true
} as InitialState
export const widgetSlice = createSlice({
    name:"Widget",
    initialState,
    reducers : {
        img : (state) => {
            if(state.img){
                return {
                    img:false,
                    h1:false,
                    h2:false,
                    para:true
                }
            }else{
                return {
                    img:true,
                    h1:false,
                    h2:false,
                    para:false
                }
            }
            
        },
        h1 : (state) => {
            if(state.h1){
                return {
                    img:false,
                    h1:false,
                    h2:false,
                    para:true
                }
            }else{
                return {
                    img:false,
                    h1:true,
                    h2:false,
                    para:false
                }
            }
        },
        h2 : (state) => {
            if(state.h2){
                return {
                    img:false,
                    h1:false,
                    h2:false,
                    para:true
                }
            }else{
                return {
                    img:false,
                    h1:false,
                    h2:true,
                    para:false
                }
            }
        }
    }
})

export default widgetSlice.reducer