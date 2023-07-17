import React from 'react'

export default function Inputs(props) {
  return (
       <div>
        <input placeholder={props.placeholder} />
        {props.children}
       </div> 
  )
}
