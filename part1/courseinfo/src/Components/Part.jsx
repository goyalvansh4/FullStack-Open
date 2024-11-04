import React from 'react'

const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercise}</p>
    </div>
  )
}

export default Part