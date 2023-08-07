import React from 'react'

export default function TextField({placeholder, type, handleSearchValue}) {
  return (
    <input placeholder={placeholder} type={type} onChange={handleSearchValue} />
  )
}
