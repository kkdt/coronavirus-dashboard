// Clock.jsx (functional)

import React, { useState, useEffect } from 'react';

// Q: In the context of this exercise 6, can a stateless functional component have more parameters, other than props and state?
// A: No, stateless functional components in React can only accept props and state as optional parameters. As a result, you
// cannot do something like the following, which adds other parameters other than props or state, If you need to pass any
// values to the component, you should always do so by passing them as props, without the need for adding other parameters.
//
// export const MyComponentClass = (props, param2, param3) => {
//     return ...
// }

function Clock(props) {
    const [counter, setCounter] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // console.log("Using effect....");
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
        // console.log("Counter incremented: " + counter);
    }, [counter]);

    useEffect(() => {
        // console.log("Date changed: " + date);
    }, [date]);

    return (
        <div>
            {date.toLocaleTimeString()}<br/>
        </div>
    );
}

export default Clock;