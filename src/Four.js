//Build a list component to display a list of items.

// import React from 'react'

// export default function Four() {
//     const items = ["Item1", "Item2", "Item3", "Item4", "Item5"]
//   return (
//     <ul>
//         {items.map((item, index) => {
//           return <li key={index}>{item}</li>
//         })}
//     </ul>
//   )
// }



import React from 'react'

export default function Four() {
  const items = ["a1","a2","a3","a4","a5"]
  return (
    <ul>
      {items.map((item, index) =>{
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
