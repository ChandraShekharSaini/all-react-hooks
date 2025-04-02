import React, { useActionState } from 'react'
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom'

const useActionState1 = () => {

    const addUser = (prevData, formData) => {
        const name = formData.get('name')
        const password = formData.get('password')

        new Promise(resolve => setTimeout(resolve, 3000))

        if (!name) return { error: "Name field is empty" }

        if (!password) return { error: "Password field is empty" }

        if (name && password) return { message: "Form Submitted Successfully" }
    }


    const [data, action, ispending] = useActionState(addUser, { error: "Form Not Submitted" })



    return (
        < section style={{ width: "100%", height: "50vh", text: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <div>
                <h1>useActionState (React 19)</h1>
            </div>


            <form action={action} style={{ border: "1px solid black ", padding: "10px", width: "50%", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type='text' name='name' placeholder='Enter Name' style={{ padding: "10px", outline: "none", border: "1px solid red", borderRadius: "5px" }} />
                <br></br>
                <input type='password' name='password' placeholder='Enter Password' style={{ padding: "10px", outline: "none", border: "1px solid red", borderRadius: "5px" }} />
                <br></br>
                <button type='submit' style={{ padding: "5px 10px ", outline: "none", border: "none", backgroundColor: "red", color: "white" }}>Submit</button>
            </form>

            {
                data?.message ? (<p style={{ color: "green", fontSize: "18px", fontWeight: "600px" }}>{data?.message} </p>) : (<p style={{ color: "red", fontSize: "18px", fontWeight: "600px" }}>{data?.error}</p>)
            }
        </section>
    )
}

export default useActionState1