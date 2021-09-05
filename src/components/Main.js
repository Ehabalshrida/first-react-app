import React, { Component } from 'react'

 class HornedBeast  extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt=""></img>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast 
