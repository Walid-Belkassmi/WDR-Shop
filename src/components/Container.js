import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">{children}</div>
      </div>
    </div>
  )
}

export default Container
