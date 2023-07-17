import React from 'react'

export default function Inputs(props) {

  return (
       <div>
        <input value={props.value} onChange={props.handelechange} placeholder={props.placeholder} />
        {props.children}
       </div> 
  )
}
