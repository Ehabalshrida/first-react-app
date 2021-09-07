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

                <div>Clicks:{this.state.clicks}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVGFHOMTZJI2seOBPw0ZeEWBjKGTPSabMvQ&usqp=CAU"height="40px"width="40px"/></div>

            </>
        )
    }
}

export default HornedBeast 