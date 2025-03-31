import { Button } from 'bootstrap';
import React, { useState, useTransition } from 'react'

const useTransition1 = () => {

  const [isPending, startTransition] = useTransition();
  const [isloading, setloading] = useState(false)

  const handleSubmit = () => {

    // setloading(true)

    startTransition(async () => {
      await new Promise(resolve => setTimeout(resolve, 4000))

    })

    // setloading(false)
  }

  return (

    <div>
      <div>
        <button disabled={isPending} type='submit' onClick={handleSubmit}>Click</button>

      </div>


      {
        isPending ? <img style={{ width: "500px" }} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" srcset="" /> : null
      }
    </div>
  )
}

export default useTransition1