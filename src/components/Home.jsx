import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home-container">
      <p>Hello I am a vending Maching, What would you like to eat?</p>
      <img
        src="https://images.unsplash.com/photo-1618506557292-ec1862b3c506?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
      <Nav/>
    </div>
  );
};

export default Home;
