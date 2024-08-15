// Build a file uploader component that allows users to upload images.

import React, { useState } from 'react'

export default function Twelve() {

    const [file, setFile] = useState(null)

    const handleFilesChange = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }

  return (
    <div>
        <input type='file' accept='image/*' onChange={handleFilesChange} />
        {file && <img src={URL.createObjectURL(file)} alt='Uploaded' />}
    </div>
  )
}
