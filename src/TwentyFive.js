//Fetch data from multiple APIs and display the combined data in your component.

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const TwentyFive = () => {
    const [dataOne, setDataOne] = useState([])
    const [dataTwo, setDataTwo] = useState([])

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response=> {
      setDataOne(response.data)
      })
      .catch(error=> {
      console.error('Error', error)
      })

      axios.get("https://jsonplaceholder.typicode.com/posts/2")
      .then(response=> {
      setDataTwo(response.data)
      })
      .catch(error=> {
      console.error('Error', error)
      })
    }, [])
    console.log(dataOne, dataTwo);
  return (
    <div>TwentyFive</div>
  )
}
