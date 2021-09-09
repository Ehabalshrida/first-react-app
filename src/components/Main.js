import React, { Component } from 'react'
import HornedBeast from "./HornedBeast";
import { Row } from 'react-bootstrap';
 class Main extends Component {
    render() {
        return (
            
            <>
            <Row>
            {this.props.data.map( item => {
            return ( <HornedBeast title={item.title} image_url={item.image_url} description={item.description}horns={item.horns} showImg={this.props.showImg} />)
            })
            }
           </Row>
            </>

        )
    }
}

export default Main
