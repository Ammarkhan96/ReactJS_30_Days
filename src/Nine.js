//Create a component that changes its background color when clicked.

import React, { useState } from 'react'

export default function Nine() {
    const [backgroundColor, setBackroundColor] = useState('orange')

    const handleClick = () => {
        const newColor = backgroundColor === 'orange' ? 'lightblue' : 'orange'
        setBackroundColor(newColor)
    }
  return (
    <div onClick={handleClick} 
    style={{
        backgroundColor,
        width: '200px',
        height: '200px',
        cursor: 'pointer',

    }}>Click me to change Color</div>
  )
}
