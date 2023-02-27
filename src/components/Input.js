import React from 'react'

const Input = ({
  id,
  type,
  placeholder,
  grow,
  label,
  mb,
  mr,
  ml,
  width,
  value,
}) => {
  return (
    <div className={`${mb} ${mr} ${ml} ${width} ${grow}`}>
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

export default Input
