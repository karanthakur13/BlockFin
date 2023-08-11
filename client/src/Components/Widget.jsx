import React from "react";
import { useDispatch } from "react-redux";
import { widgetSlice } from "../Store/Slices/Widget.js";
import styles from "./widget.module.css";

function Widget() {
  const dispatch = useDispatch();

  return (
    <div className={styles.widget}>
      <button
        onClick={() => {
          dispatch(widgetSlice.actions.img());
        }}
      >
        Image
      </button>
      <button
        onClick={() => {
          dispatch(widgetSlice.actions.h1());
        }}
      >
        H1
      </button>
      <button
        onClick={() => {
          dispatch(widgetSlice.actions.h2());
        }}
      >
        H2
      </button>
    </div>
  );
}

export default Widget;
