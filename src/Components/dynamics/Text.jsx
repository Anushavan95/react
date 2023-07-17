import React from 'react'

export default function Text(props) {
    const element = React.createElement('div', {id: "text"}, 'text')
    console.log(element.props.children, "element")
  return (
    <h2 className={props.class}>{props.children}</h2>
  )
}
