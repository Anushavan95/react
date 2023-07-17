import React from 'react'
import Text from './dynamics/Text'

export default function Header(props) {
console.log(props, "function")
  return (
    <div>
     <Text class={'success'}>
     {props.text}
     </Text>
    </div>
  )
}
