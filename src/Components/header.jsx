import React from 'react'
import Text from './dynamics/Text'

export default function Header(props) {
  return (
    <div>
     <Text class={'success'}>
     {props.text}
     </Text>
    </div>
  )
}
