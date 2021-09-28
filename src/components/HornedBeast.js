import React, { Component } from 'react'
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';
class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        }
    }
    handleClick=()=>{
       // let title = ;
        //let description = ;
        this.props.showImg(this.props.title, this.props.description,this.props.image_url);
        }
    
    clickImage = () => {
        this.setState({

            clicks: this.state.clicks + 1,
        })
    }
    render() {
        return (
            <>
                <Col>
                <Card style={{ width: '18rem',height:'36rem',margin-bottom
:'5px' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.clickImge} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}<br/>
                        it has {this.props.horns} horns
                        </Card.Text>
                        <Button onClick={this.handleClick} variant="primary">Show More </Button>
                    </Card.Body>
                </Card>
                </Col>
            </>
        )
    }

}


export default HornedBeast
