import { Link } from 'react-router-dom'

const PreCollection = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800  text-center ">
            Top Ventes
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          <Link to={'/collections'}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600 dark:text-white">
                  Football
                </h2>
                <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1551854269-93c58e58b410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="soccer jersey"
                  role="img"
                />
              </div>
            </div>
          </Link>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div className="">
              <h2 className="text-xl text-gray-600 dark:text-white">
                Basketball
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-24">
              <Link to={''}>
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1530279281203-4c60af01ee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="basketball jersey"
                  role="img"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div className="">
              <h2 className="text-xl text-gray-600 dark:text-white">
                Football Americain
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-24">
              <Link to={''}>
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
                  alt="American football jersey"
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
                Musculation
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-3">
              <Link to={''}>
                <img
                  src="https://images.unsplash.com/photo-1661439193765-392d81462003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="gym"
                  role="img"
                />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8">
            <div>
              <h2 className="text-xl leading-tight text-gray-600 dark:text-white">
                Golf
              </h2>
              <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
            </div>
            <div className="flex justify-center items-center mt-28 md:mt-1">
              <Link to={''}>
                <img
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Golf"
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

export default PreCollection
