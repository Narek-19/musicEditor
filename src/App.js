import React from "react";
import Footer from "./containers/FooterComponent";
import Header from "./containers/HeaderComponent";
import NavBar from "./containers/NavBarComponent";



export const App = () => {
  
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  );
};
