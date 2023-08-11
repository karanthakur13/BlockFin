// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Login, Home, Blog, Createblog } from "./pages";
import axios from "axios";
import styles from './app.css'

const App = () => {
  return (
    <div className={styles.app}>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Createblog" element={<Createblog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
