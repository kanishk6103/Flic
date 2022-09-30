import React from "react";

const HomeHero = () => {
  return (
    <>
      <div className="grid h-full overflow-x-hidden bg-slate-900">
        <div className="mx-auto sm:mx-16 flex flex-col pt-20">
          <h1 className="text-white text-5xl font-semibold w-80 leading-[5rem]">
            Hey! Welcome to Our Club{" "}
            <span className="bg-gradient-to-r from-indigo-800 to-green-400 text-transparent bg-clip-text font-bold">
              FLiC.
            </span>
          </h1>
          <p className="text-slate-400 my-4">
            The official financial literacy club of IET-DAVV.
          </p>

          <div className="flex pl-4 space-x-10">
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded-full hover:bg-green-700 bg-green-600 text-gray-800"
            >
              Sample
            </button>
            <button
              type="button"
              className="px-8 bg-violet-800 hover:bg-violet-900 py-3 font-semibold rounded-full"
            >
              Sample
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:flex w-[100vw] space-y-8 mt-10 sm:space-y-0 sm:pt-10">
          <div className="mx-auto sm:mx-16">
            <div className="flex">
              <img src="" alt="#" />
              <h2 className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p className="w-72 text-white ">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus dicta. Corporis recusandae
              aliquam ipsum debitis possimus similique molestias
            </p>
          </div>
          <div className="mx-auto sm:mx-4  pb-10 ">
            <div className="flex">
              <img src="" alt="#" />
              <h2 className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p className="w-72 text-white ">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus dicta. Corporis recusandae
              aliquam ipsum debitis possimus similique molestias
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
