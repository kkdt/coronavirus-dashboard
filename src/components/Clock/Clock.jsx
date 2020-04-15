// Clock.jsx (functional)

import React, { useState, useEffect } from 'react';

function Clock(props) {
    const [counter, setCounter] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("Using effect....");
        var _dateTimer = setInterval(
            () => {
                setDate(new Date());
                setCounter(c => c + 1);
            },
            1000
        );
        // unmount routine
        return (() => {
            console.log("Unmounting the clock...");
            clearInterval(_dateTimer);
        });
    },[]);

    useEffect(() => {
        console.log("Counter incremented: " + counter);
    }, [counter]);

    useEffect(() => {
        console.log("Date changed: " + date);
    }, [date]);

    return (
        <div>
            {date.toLocaleTimeString()}<br/>
        </div>
    );
}

export default Clock;