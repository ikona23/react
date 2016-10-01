import React from 'react'

import Camera from './Camera'



const List = (props) => {
  console.log('props in Camera', props)

  var cards = props.camera.map( (Camera) => {
    return <li><Camera votes={Camera.votes} label={Camera.description} country={Camera.country} </li>
  })

  return (
    <div>
        <h4>{props.title}</h4>
      <ul>
        {Camera}
      </ul>
    </div>
  )
}

export default List
