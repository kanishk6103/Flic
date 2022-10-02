import React from "react";

const Timeline = () => {
	return (
		<div>
			<div class="overflow-hidden">
				<div class="flex flex-col bg-slate-900 md:grid grid-cols-9 mx-auto p-2   text-blue-50">
					<div class="flex flex-row-reverse md:contents">
						<div class="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
							<h3 class=" font-bold justify-center mb-3 bg-gradient-to-r from-indigo-800 to-green-400 text-transparent bg-clip-text text-4xl">What is FLiC</h3>
							<p class="leading-tight text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
								quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tenetur, hic minima. Corrupti voluptas vitae tenetur commodi
								error cumque consequuntur neque possimus. Molestias.
							</p>
						</div>
						<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-slate-400 pointer-events-none"></div>
							</div>
							<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"></div>
						</div>
					</div>

					<div class="flex md:contents">
						<div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
							</div>
							<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
						</div>
						<div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
							<h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
							<p class="leading-tight text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
								facilis.
							</p>
						</div>
					</div>
					<div class="flex flex-row-reverse md:contents">
						<div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
							<h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
							<p class="leading-tight text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
								quaerat?
							</p>
						</div>
						<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
							</div>
							<div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
