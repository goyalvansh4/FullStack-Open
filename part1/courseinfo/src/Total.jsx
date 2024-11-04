import React from 'react'

const Total = ({total}) => {
  let sum = total.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <div>Total:{sum}</div>
  )
}

export default Total