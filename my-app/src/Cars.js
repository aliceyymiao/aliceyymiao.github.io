import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardImg, Button, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

export class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/cars.csv').then((d) => {
            this.setState({
                data: d
            });
        });
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Cars
                 { this.state.data.map((d, i) => {
                       return <Col sm="6" key={ "car" + i }>
                              <Card>
                              <CardImg top width="100%" src={d.img} alt="cars" />
                                <CardBody>
                                  <CardTitle>
                                    { d.manufacturer }
                                  </CardTitle>
                                  <CardSubtitle>
                                   { d.model } 
                                  </CardSubtitle>
                                  <CardText>
                                    { d.price }
                                  </CardText>
                                  <a target="_blank" rel="noopener noreferrer" href={ d.link }>
                                    <Button>Link</Button>
                                  </a>
                                </CardBody>
                              </Card>
                              <br/>
                              </Col>
                   
                   }) }
               </div>
    }
}