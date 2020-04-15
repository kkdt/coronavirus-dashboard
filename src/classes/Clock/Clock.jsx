/*
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render = () => (
        <div>
            {this.state.date.toLocaleTimeString()}<br/>
        </div>
    );

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.setState({
        //     date: new Date()
        // });
        this.setState((state, props) => ({
            counter: (state.counter | 0) + 1,
            date: new Date()
        }));
        console.log("Counter: " + this.state.counter)
    }
}

export default Clock
