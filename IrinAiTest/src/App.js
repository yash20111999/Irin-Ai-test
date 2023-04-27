import React,{ useState } from "react";
import { Header, Content } from "./organism";
import './App.css';

const App = () => {


  return (
    <div className="wrapper">
      <Header />
      <Content/>
    </div>
  );
};

export default App;
