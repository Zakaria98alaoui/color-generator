import React, { useState, useEffect } from 'react'

const Singlepage = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  let myHexColor = `#${hexColor}`
  // add all elements inside the array rgb into string
  let bcg = rgb.join(',')
  useEffect(() => {
    // set new timout
    let timout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    // remove the old timout before create new one
    return () => clearTimeout(timout)
  }, [alert])
  return (
    <>
      <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(myHexColor)
        }}
      >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{myHexColor}</p>
        {alert && <p className='alert'>copy to clipboard</p>}
      </article>
    </>
  )
}

export default Singlepage
