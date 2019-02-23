import React, { Component } from 'react';
import './Clock.css';

class Clock extends React.Component {

    count = 0;

        constructor(props) {
            super(props);
            this.state = {date: new Date()};         
        }

    componentDidMount () {
        this.timerID = setInterval (
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
        
    tick() {
        this.setState ({
            date : new Date()
        });
    }

    render () {

        var integer = parseInt(this.state.date.toLocaleTimeString());
            return (
                <div>
                    <h1>My Second React Lab</h1>
                    <h2>The time is {this.state.date.toLocaleTimeString ()}.</ h2>
                </div>
            );
    } 
} 

export default Clock;