import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
            Top Selling
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div className="">
              <h2 className="text-xl text-gray-600 dark:text-white">
                Lounge Chair
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-24">
              <Link to={''}>
                <img
                  className=""
                  src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png"
                  alt="A chair with designed back"
                  role="img"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div className="">
              <h2 className="text-xl text-gray-600 dark:text-white">
                Lounge Chair
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-24">
              <Link to={''}>
                <img
                  className=""
                  src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png"
                  alt="A chair with wooden legs"
                  role="img"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div className="">
              <h2 className="text-xl text-gray-600 dark:text-white">
                Lounge Chair
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-24">
              <Link to={''}>
                <img
                  className=""
                  src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png"
                  alt="A sofa chair with wooden legs"
                  role="img"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div>
              <h2 className="text-xl leading-tight text-gray-600 dark:text-white">
                Blackgit Sofa
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-3">
              <Link to={''}>
                <img
                  src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png"
                  alt="A large sectional sofa"
                  role="img"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div>
              <h2 className="text-xl leading-tight text-gray-600 dark:text-white">
                White Sofa
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-1">
              <Link to={''}>
                <img
                  src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png"
                  alt="A beautiful two seater sofa"
                  role="img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
