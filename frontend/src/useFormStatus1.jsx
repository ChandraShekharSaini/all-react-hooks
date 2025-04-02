
import React from 'react'
import { useFormStatus } from 'react-dom'


const SubmitButton = () => {
    const { pending  } = useFormStatus();
   


    return (
        <>
            <button disabled={pending} type='submit'>{pending ? <p>Submitting... </p> : <p>Submit</p>}</button>
        </>
    )
}

const useFormStatus1 = () => {


    const handleSubmit = async (formData) => {
        console.log(formData.get('password'))
        console.log(formData.get('name'))

        await new Promise(resolve => setTimeout(resolve, 3000))

    }

    return (
        <div>
            <h1>useFormStatus</h1>
            <form action={handleSubmit}>
                <input type='text' name="name" placeholder='Enter Name' />
                <input type='password' name="password" placeholder='Enter Password' />
                <SubmitButton />
            </form>
        </div>
    )
}

export default useFormStatus1