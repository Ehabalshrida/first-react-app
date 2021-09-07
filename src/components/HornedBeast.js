import React, { Component } from 'react'

 class HornedBeast  extends Component {
    constructor(props){
        super(props);
      this.state={
            clicks:0,
        }
    }

    clickImage = () => {  
        this.setState({
         
            clicks:this.state.clicks+1,
        })
     }    
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt="" onClick={this.clickImage}></img>
                <p>{this.props.description}</p>
                <div>Clicks:{this.state.clicks}<img src="https://w7.pngwing.com/pngs/408/912/png-transparent-right-border-of-heart-mini-heart-s-love-heart-sticker.png"height="50px"width="50px"/></div>
            </>
        )
    }
}

export default HornedBeast 