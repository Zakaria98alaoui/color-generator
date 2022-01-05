import React, { useState, useEffect } from 'react'
import Singlepage from './singlePage'
import Values from 'values.js'
function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [lists, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(lists)
    } catch (error) {
      setError(true)
      console.log("ther's an error unexpected")
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#ff0000'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {lists.map((color, index) => {
          return (
            <Singlepage
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
