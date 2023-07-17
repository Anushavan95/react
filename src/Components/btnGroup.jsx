import React from 'react'

export default function BtnGroup(props) {
  console.log(props)
  return (
    <div className='btns'>
        <button>edit</button>
        <button onClick={props.handleDelete}>delete</button>
        <button onClick={props.handleclickImportant}>important</button>

    </div>
  )
}
