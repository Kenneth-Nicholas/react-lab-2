import React, { Component } from 'react';

class Clock extends React.Component {

    count = 0;

        constructor(props) {
            super(props);
            this.state = {
                date: new Date(),
                colors: ['red', 'green', 'blue']
            };         
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
        const randomNumber = Math.floor(Math.random() * 3);

        const color = this.state.colors[randomNumber];


            return (
                <div>
                    <h1>My Second React Lab</h1>
                    <h2>The time is <span className={color}>{this.state.date.toLocaleTimeString ()}</span>.</ h2>
                </div>
            );
    } 
} 

export default Clock;