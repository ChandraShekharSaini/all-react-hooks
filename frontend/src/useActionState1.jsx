import React, { useActionState } from 'react'

const useActionState1 = () => {


    const addUser = (prevData, formData) => {
        console.log("Add User")
        const password = formData.get('password');
        const name = formData.get('name')

        new Promise(resolve => setTimeout(resolve, 3000))
        console.log(name)

        if (!password || !name) {
            return { error: "Input Field is Empty" }
        }

        if (password && name) {

            return { message: "User Added Successfully" }
        }

    }


    const [data, action, pending] = useActionState(addUser, 0)




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