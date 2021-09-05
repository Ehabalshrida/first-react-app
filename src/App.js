import React, { Component } from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";


 class App extends Component {
  render() {
    return (
      <>
         <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App
