import React, { Component } from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";
 class App extends Component {
   constructor(props){
   super(props);
   this.state = {
    showModal: false,
    title: "",
    description: "",
  }
}
showImg=(title, description)=>
        {
  this.setState({
    showModal: true,
    title: title,
    description: description,
  })
}
   
closeModal=()=>{
  this.setState({
    showModal: false,
  })
}

  
  render() {
    return (
      <>
         <Header/>
        <Main data={data} showImg={this.showImg}/> 
        <SelectedBeast handleClose={this.closeModal}
        showModal={this.state.showModal} 
        title={this.state.title}
        description={this.state.description}/>
        <Footer/>
      </>
    )
  }
}

export default App
