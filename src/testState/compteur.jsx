import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Compteur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {this.setState({count: this.state.count+1})} , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const style={color:"rgb(241, 121, 8"}
        return (
            <Card >      
 
                 <Card.Text style={style}>
                    Time : {this.state.count}
                 </Card.Text>
                
            </Card>
        );
    }
}

