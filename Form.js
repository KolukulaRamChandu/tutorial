import React from 'react'
import { useState } from "react"
const Form = (props) => {
  const [name,setName] = useState("")
  function handleChange(e) {
    setName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form