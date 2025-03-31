import React, { useRef } from 'react'
import UseImperativeRefChild from './UseImperativeRefChild'

const UseImperativeRefParent = () => {

    const inputRef = useRef()

    console.log(inputRef)
    return (
        <div>
            <UseImperativeRefChild ref={inputRef} />
            <br></br>
            <br></br>
            <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
            <br></br>
            <br></br>
            <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
            <br></br>
            <br></br>

            <button onClick={() => inputRef.current.styleInput()} >Style Input</button>
        </div>
    )
}

export default UseImperativeRefParent 