import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({
  src1 = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2655366c-e7b0-4d03-b2a1-6a8f618be6d2/maillot-de-football-dri-fit-paris-saint-germain-2022-23-stadium-domicile-pour-T2dRkh.png',
  src2 = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bb8f2edb-6c92-4cd4-aee8-431658b00564/maillot-de-football-dri-fit-paris-saint-germain-2022-23-stadium-domicile-pour-T2dRkh.png',
  title = 'Title',
  currencySymbol = '€',
  price = '89,99',
  onClickAddtoCart,
  onChangeItemCount,
  description = 'Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantiumenim, libero blanditiis expedita cupiditate Link est.',
}) => {
  return (
    <>
      <div className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img src={src1} />
                  </div>

                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img src={src2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 mt-20 ml-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {title}
              </h2>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">
                      {currencySymbol}
                    </span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {price}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">
                    Inclus toutes les taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">{description}</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select
                    className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                    onChange={onChangeItemCount}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  onClick={onClickAddtoCart}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
