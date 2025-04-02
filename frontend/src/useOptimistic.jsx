import { Button } from 'bootstrap';
import React, { useEffect, useOptimistic, useState } from 'react'

const useOptimistic1 = () => {


  const [skills, addskills] = useState([]);
  const [name, setname] = useState(null)
  const [optSkills, addoptSkills] = useOptimistic(skills, (state, newSkills) => { return [...state, newSkills] })

  useEffect(() => {
    getSkills()
  }, [])


  const getSkills = async () => {

    const res = await fetch('http://localhost:4500/getSkills', {
      method: 'GET',
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }

    const data = await res.json()

    addskills(data)


  }


  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }


  const addSkills = async (ev) => {
    // ev.preventDefault()

    const id = Math.floor(Math.random() * 10000);

    const newSkills = { name, id }

    addoptSkills(newSkills)


    const res = await fetch("http://localhost:4500/addSkills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, id })
    })

    await sleep(3000)

    const data = await res.json()

    if (data) {
      getSkills()
    }


  }



  return (
    <section>

      <form action={addSkills}>
        <input onChange={(ev) => setname(ev.target.value)} type='text' placeholder='Enter Skills' />
        <button type='submit'>Add Skills</button>
      </form>

      {
        optSkills.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })
      }

    </section>
  )
}

export default useOptimistic1