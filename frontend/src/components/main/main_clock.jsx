// references a javascript tutorial on w3schools.com
import React, { Component } from 'react'

export default class MainClock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.canvas = document.getElementById("canvas");
        this.timer = setInterval(() => this.tick(), 1000);
        this.ctx = this.canvas.getContext("2d");
        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.9;
        
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    tick() {
        this.ctx.clearRect(-400, -400, 800, 800);
        this.setState({
            date: new Date(),
        });
        this.drawClock();
    }
    
    drawClock() {
        this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "transparent";
        this.ctx.fill();
        this.drawTime();
    }

    drawFace() {
        this.ctx.clearRect(0, 0, 400, 400);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
        this.ctx.fillStyle = "transparent";
        this.ctx.fill();
    }

    drawTime() {
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
        let second = this.state.date.getSeconds();

        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        this.drawHand(hour, this.radius * 0.5, this.radius * 0.07);

        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(minute, this.radius * 0.8, this.radius * 0.07);

        second = (second * Math.PI) / 30;
        this.drawHand(second, this.radius * 0.9, this.radius * 0.02);
    }

    drawHand(pos, length, width) {
        this.ctx.beginPath()
        this.ctx.lineWidth = width
        this.ctx.lineCap = "round"
        this.ctx.moveTo(0,0) 
        this.ctx.rotate(pos)
        this.ctx.lineTo(0, -length)
        this.ctx.stroke()
        this.ctx.rotate(-pos)
  }

    render() {
        return (
            <canvas id="canvas" width="400" height="400"></canvas>
        );
    }
}
