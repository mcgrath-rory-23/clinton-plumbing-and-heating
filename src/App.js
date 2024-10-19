import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
