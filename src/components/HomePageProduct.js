import React from 'react'
import { Link } from 'react-router-dom'

const HomePageProduct = ({
  to = '/product',
  title = 'Maillot PSG',
  currencySymbol = '€',
  price = '89.99',
  src,
}) => {
  return (
    <Link to={to} className="cursor-pointer">
      <article className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
            src={src}
            alt={title}
          />
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div className="">
            <h3 className="text-xs font-semibold sm:text-sm md:text-base">
              {title}
              <span className="absolute" aria-hidden="true"></span>
            </h3>
          </div>

          <div className="text-right">
            <p className="text-xs font-normal sm:text-sm md:text-base">
              {currencySymbol} {price}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default HomePageProduct
