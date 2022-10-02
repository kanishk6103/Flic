import React from "react";

const HomeHero = () => {
  return (
    <>
      <div className="grid sm:h-full overflow-x-hidden bg-slate-900">
        <div className="mx-auto sm:mx-16 flex flex-col pt-8">
          <h1 className="text-white text-4xl font-semibold w-80 leading-[5rem]">
            Hey! Welcome to Our Club{" "}
            <span className="bg-gradient-to-r from-[#2F2A7B] text-6xl to-[#39B54A] text-transparent bg-clip-text font-bold">
              FLiC.
            </span>
          </h1>
          <p className="text-[#949494] my-4">
            The official financial literacy club of IET-DAVV.
          </p>

          <div className="flex space-x-10">
            <button
              type="button"
              className="px-8 py-3 active:rounded font-semibold rounded-full hover:bg-green-700 bg-green-600 text-gray-800"
            >
              Sample
            </button>
            <button
              type="button"
              className="px-8 active:rounded  bg-violet-800 hover:bg-violet-900 py-3 font-semibold rounded-full"
            >
              Sample
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:flex w-[100vw] space-y-8 mt-8 sm:space-y-0 sm:pt-10">
          <div className="mx-auto sm:mx-16">
            <div className="flex">
              <svg
                width="40"
                height="40"
                className="mx-4"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="34.5"
                  cy="34.5"
                  r="32.5"
                  stroke="#646464"
                  stroke-width="4"
                />
                <line
                  x1="10.567"
                  y1="31.8495"
                  x2="16.3979"
                  y2="21.75"
                  stroke="#969696"
                />
                <line
                  x1="51.433"
                  y1="21.75"
                  x2="57.264"
                  y2="31.8495"
                  stroke="#969696"
                />
                <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#969696" />
                <line
                  x1="10.3536"
                  y1="31.6464"
                  x2="33.3536"
                  y2="54.6464"
                  stroke="#969696"
                />
                <line
                  x1="33.8596"
                  y1="55.6464"
                  x2="57.8596"
                  y2="31.6464"
                  stroke="#969696"
                />
                <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#969696" />
              </svg>
              <h2 className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p className="w-60 ml-[4.2rem] text-sm text-[#828282] ">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </p>
          </div>
          <div className="mx-auto sm:mx-4  pb-10 ">
            <div className="flex">
              <svg
                width="40"
                height="40"
                className="mx-4"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="34.5"
                  cy="34.5"
                  r="32.5"
                  stroke="#646464"
                  stroke-width="4"
                />
                <line
                  x1="10.567"
                  y1="31.8495"
                  x2="16.3979"
                  y2="21.75"
                  stroke="#969696"
                />
                <line
                  x1="51.433"
                  y1="21.75"
                  x2="57.264"
                  y2="31.8495"
                  stroke="#969696"
                />
                <line x1="17" y1="21.5" x2="51" y2="21.5" stroke="#969696" />
                <line
                  x1="10.3536"
                  y1="31.6464"
                  x2="33.3536"
                  y2="54.6464"
                  stroke="#969696"
                />
                <line
                  x1="33.8596"
                  y1="55.6464"
                  x2="57.8596"
                  y2="31.6464"
                  stroke="#969696"
                />
                <line x1="13" y1="29.5" x2="54" y2="29.5" stroke="#969696" />
              </svg>
              <h2 className="text-white font-semibold text-lg">Features</h2>
            </div>
            <p className="w-60 ml-[4.2rem] text-sm text-[#828282] ">
              Lorem ipsum dolor sit amet coctetur adipishhgging elit. Ratione
              quae odio perferendis fugiat possimus. Corporis aliquam ipsum
              debitis possimus similique molestias
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
