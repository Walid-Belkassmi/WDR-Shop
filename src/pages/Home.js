import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className=" bg-gray-50 flex items-center">
        <section className="bg-cover bg-center py-32 w-full bg-[url('https://images.unsplash.com/photo-1602472097151-72eeec7a3185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')]">
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6 ml-6">
                  WDR le sport avant tout !
                </h1>
                <p className="text-xl mb-12 ml-6">
                  Ce sont les meilleures équipes, Sie sind die allerbesten
                  Mannschaften The main event Die Meister, die Besten, les
                  meilleures équipes, the champions !
                </p>
                <Link
                  className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
                  to={'/collection'}
                >
                  Collection
                </Link>
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src="https://images.unsplash.com/photo-1551854304-9235bf86ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="mt-2 font-serif text-2xl font-bold sm:text-4xl">
              Must Haves
            </h2>
            <p class="mt-8 text-xl text-gray-700">
              Some of our favourite picks this week.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/images/b51KL2CYAFVT7VAPpnEMW.png"
                  alt=""
                />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <Link href="#" title="" class="cursor-pointer">
                      ?????
                      <span class="absolute" aria-hidden="true"></span>
                    </Link>
                  </h3>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">
                    $89.99
                  </p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/images/sUgmRNIkRW2SZCLKOOfX2.png"
                  alt=""
                />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <Link href="#" title="" class="cursor-pointer">
                      ?????
                      <span class="absolute" aria-hidden="true"></span>
                    </Link>
                  </h3>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">
                    $89.99
                  </p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/images/J573dRVtghSynx5yCis80.png"
                  alt=""
                />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <Link href="#" title="" class="cursor-pointer">
                      ?????
                      <span class="absolute" aria-hidden="true"></span>
                    </Link>
                  </h3>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">
                    $89.99
                  </p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img
                  class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                  src="/images/oZ_djoBAmHk4vgKQh41YT.png"
                  alt=""
                />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <Link href="#" title="" class="cursor-pointer">
                      ?????
                      <span class="absolute" aria-hidden="true"></span>
                    </Link>
                  </h3>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">
                    $89.99
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
