import React from 'react'

const Button = (props: any) => {
  return (
    <button className="w-3/6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={props.event}>{props.label}</button>
  )
}

export default Button