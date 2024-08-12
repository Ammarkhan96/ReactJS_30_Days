// Implement a basic toggle swtich component.

// import React, { useState } from 'react'

// export default function Five() {
//     const [isToggled, setIsToggles] = useState(false)

//     const handleToggle = () => {
//         setIsToggles(!isToggled)
//     }
//   return (
//     <div>
//         <label>
//          <input type='checkbox' onChange={handleToggle} />
//         </label>
//         <p>{isToggled ? "On": "Off"}</p>
//     </div>
//   )
// }





import React, { useState } from 'react'

export default function Five() {
  const [isToggle, setToggle] = useState(false)

  const handleChange = () => {
    setToggle(!isToggle)
  }
  return (
   <div>
    <label>
      <input type='checkbox' onChange={handleChange} />
      <p>{isToggle ? "On" : "Off"}</p>
    </label>
   </div>
  )
}

