import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Formupload = () => {
    const[file, setFile] = useState(null)
    const[error,setError] = useState(null)

    const types = ['image/jpeg', 'image/png']

    const changeHandler =(e) =>{
        const selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError('Please add an image with type PNG or JPEG')
        }
    }
    return (
        <form className="form-up">
            <label >
            <input  onChange={changeHandler} type="file"/>
            <span>+</span>
            </label>
            
            <div className="output">
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile } />}
            </div>
        </form>
    )
}

export default Formupload
