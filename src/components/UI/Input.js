import React from "react";

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return <div className={`${props.className} ${classes.input}`}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} onChange={props.onChange}></input>
    </div>
})

export default Input;