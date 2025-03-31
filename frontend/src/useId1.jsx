import React, { useId } from 'react'

const useId1 = () => {

    const id1 = useId()
    const id2 = useId()

    console.log(id1)
    console.log(id2)


    return (
        <section>
            <div style={{ border: "1px solid red" }}>
                <p>Id:{id1}</p>
                <p>Id:{id2}</p>
            </div>

            {/* Never give same id to two elements,will cause clash and accessbility issue */}


            <div style={{ border: "1px solid red" }}>
                <label htmlFor={`${id1}`} >Username {id1}</label>
                <input id={`${id1}`} type='text' placeholder='Enter' />
                <br></br>
                <br></br>
                <label htmlFor={`${id1}`} >Password {id1}</label>
                <input id={`${id1}`} type='text' placeholder='Enter' />

            </div>





            <div style={{ border: "1px solid red" }}>
                <label htmlFor={`${id1}-username`} >Username {id1}</label>
                <input id={`${id1}-username`} type='text' placeholder='Enter' />
                <br></br>
                <br></br>
                <label htmlFor={`${id1}-password`} >Password {id1}</label>
                <input id={`${id1}-password`} type='text' placeholder='Enter' />

            </div>
        </section>
    )
}

export default useId1