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
                <div>Clicks:{this.state.clicks}<img src="https://lh3.googleusercontent.com/proxy/Vh0sG4iLWm3sNc5FSrMm1hk2GQHLzwT21sjdyGbn6EbyPoT_tvi6gzzlk6KiwezId0pQGgh3AV4cT234b3HePdgCxCzunf_FwklyfWvenWszU_Iwe6VHmy0Hoa9aVv57t5laTuTSZIpfHcXYm1Msgt2D1OjO1OKOBlxJFI3gtm_TgqMg"height="50px"width="50px"/></div>
            </>
        )
    }
}

export default HornedBeast 