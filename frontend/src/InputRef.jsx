
// Old Method
// import React, { forwardRef } from 'react'
// const InputRef = (props, ref) => {
//     return (
//         <input type='text' placeholder='Enter ' ref={ref} />
//     )
// }

// export default forwardRef(InputRef)


import React from "react";
const InputRef = (props) => {

    console.log(props)
    return (
        <input type="text" placeholder="Enter" ref={props.ref} />
    )
}

export default InputRef