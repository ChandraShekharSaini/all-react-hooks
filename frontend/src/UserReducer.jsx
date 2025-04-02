import React, { useReducer } from 'react'

const UserReducer = () => {



    const user = (state, action) => {

        if (action.type === 'Increase') {
            return { age: state.age + 1 }
        }

        if (action.type === 'decrease') {
            return { age: state.age - 1 }
        }
    }


    const [state, dispatch1] = useReducer(user, { age: 12 })


    return (
        <div style={{ width: "50%", margin: "auto", border: "1px solid red", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ color: "red" }}>useReducer</h1>
            <p>Age:{state.age}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button onClick={() => dispatch1({ type: "Increase" })}>Age +</button>
                <button onClick={() => dispatch1({ type: "decrease" })}>Age -</button>
            </div>
        </div>
    )
}

export default UserReducer