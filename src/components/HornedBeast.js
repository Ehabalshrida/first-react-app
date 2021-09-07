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
    handleClick(){
        let title = this.props.title;
        let description = this.props.description;
        this.props.showImg(title, description);
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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.clickImge} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
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