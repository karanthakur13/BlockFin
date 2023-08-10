import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import blogReducer from './Slices/Blog';
import widgetReducer from './Slices/Widget'
import { TypedUseSelectorHook, useSelector } from 'react-redux';


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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;