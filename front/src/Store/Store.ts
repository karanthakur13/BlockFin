import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import blogReducer from './Slices/Blog';
import widgetReducer from './Slices/Widget'


const customMiddleware = getDefaultMiddleware({
    serializableCheck:false
})
export const store = configureStore({
    reducer:{
        blogReducer,
        widgetReducer
    },
    middleware:customMiddleware
});