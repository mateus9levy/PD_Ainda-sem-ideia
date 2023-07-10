import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Help from "./pages/Help";



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/help" Component={Help}/>
        </Routes >
      </Router>
    </>
  );
}

export default App;
