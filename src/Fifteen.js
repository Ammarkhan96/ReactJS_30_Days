//Build a search bar that filters a list of items based on user input.

import React, { useState } from 'react'

export default function Fifteen({items}) {

  const [searchTerms, setSearchTerms] = useState('')

  const filteredItems = items.filter((item) => 
    item.toLowerCase().includes(searchTerms.toLowerCase())
  )
  return (
    <div>
      <input type='text' placeholder='Search...' onChange={(e)=> setSearchTerms(e.target.value)} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
