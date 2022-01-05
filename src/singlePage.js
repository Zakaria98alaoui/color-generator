import React from 'react'

const Singlepage = ({ rgb, weight, index, hexColor }) => {
  let myHexColor = `#${hexColor}`
  // add all elements inside the array rgb into string
  let bcg = rgb.join(',')

  return (
    <>
      <article className='color' style={{ backgroundColor: `rgb(${bcg})` }}>
        <p className='percent-value'>{weight}</p>
        <p className='color-value'>{myHexColor}</p>
      </article>
    </>
  )
}

export default Singlepage
