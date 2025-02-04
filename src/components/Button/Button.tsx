import React from "react";
import {useState} from "react";
import "./Button.css"

function Button() {
    const [count, setCount] = useState(1);

    function clickHandler(count: number) {
        console.log(count);
        setCount(count + 1);
    }

    return(
        <>
        <button onClick={() => clickHandler(count)}> Hello</button>
        </>
    );
}

export default Button;