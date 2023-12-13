import React from 'react'

function Input({onChange, type, name, id, placeholder, value}) {
  return (
    <input onChange={onChange} value={value} type={type} name={name} id={id} placeholder={placeholder} className="block outline-none w-full p-4 text-lg rounded-md bg-black" />
  )
}

export default Input