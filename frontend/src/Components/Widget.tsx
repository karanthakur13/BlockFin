import React from "react";
import { useDispatch} from "react-redux";
import { widgetSlice } from "@/Store/Slices/Widget";

function Widget(){

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {dispatch(widgetSlice.actions.img())}}>Image</button>
            <button onClick={() => {dispatch(widgetSlice.actions.h1())}}>H1</button>
            <button onClick={() => {dispatch(widgetSlice.actions.h2())}}>H2</button>
        </div>
    )
}

export default Widget