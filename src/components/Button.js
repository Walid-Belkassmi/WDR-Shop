import React from 'react'

const Button = ({ label, onClick, type }) => {
  // console
  return (
    <button
      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
