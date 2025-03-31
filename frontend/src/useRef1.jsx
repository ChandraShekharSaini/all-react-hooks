import React, { useRef } from 'react'
import InputRef from './InputRef'

const UseRef1 = () => {
    const inputRef = useRef()

    const handleUpdate = () => {
        inputRef.current.value = 1000;
        inputRef.current.focus()
        inputRef.current.style = "red"
    }

    return (
        <>
            <div>useRef1</div>
            <InputRef ref={inputRef} />
            <br></br>
            <button onClick={handleUpdate} >Update</button>
        </>
    )
}

export default UseRef1
