import React, { Component } from 'react'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from "./components/SelectedBeast";
import Forms from './components/Forms';
 class App extends Component {
   constructor(props){
   super(props);
   this.state = {
    showModal: false,
    title: "",
    description: "",
    image_url:"",
    data:data,

  }
}
showImg=(title, description,image_url)=>
        {
  this.setState({
    showModal: true,
    title: title,
    description: description,
    image_url:image_url,
  })
}
   
closeModal=()=>{
  this.setState({
    showModal: false,
  })
}
filterData=(data)=>{
this.setState({
  data:data,
})}
  render() {
    return (
     <>
         <Header/> 
         <Forms filterData={this.filterData}></Forms>        
         <Main data={this.state.data} showImg={this.showImg}/> 
        <SelectedBeast closeModal={this.closeModal}
        showModal={this.state.showModal} 
        title={this.state.title}
        description={this.state.description}
        image_url={this.state.image_url}/>
        <Footer/>
      </>
    )
  }
}

export default App