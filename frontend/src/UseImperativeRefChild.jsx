import React, { useImperativeHandle,  useRef } from 'react'

const UseImperativeRefChild = (props) => {

    const inputRef = useRef()

    useImperativeHandle(props.ref, () => ({

        focusInput() {
            inputRef.current.focus()
        },

        clearInput() {
            inputRef.current.value = ''
        },

        styleInput() {
            inputRef.current.style = 'red'
            inputRef.current.style.background = 'red'
            if( inputRef.current.style.background == 'red'){
                inputRef.current.style.color = 'white'
            }

        }
    }), [])


    return (
        <input ref={inputRef} type='text' placeholder='Enter' />
    )
}







export default UseImperativeRefChild