import React from "react";

const Timeline = () => {
	return (
		<div id="About">
			<div class="overflow-hidden">
				<div class="flex flex-col bg-[#202020] md:grid grid-cols-9 mx-auto p-2 text-blue-50 py-36">
					<div class="flex flex-row-reverse md:contents align-center">
						<div class="col-start-2 col-end-5 p-4 my-8">
							<div class = "mx-auto w-2/5 bg-gradient-to-r from-[#2F2A7B]  to-[#39B54A] text-transparent bg-clip-text pb-4">
							<h3 class = "font-['Epilogue'] antialiased flex font-extrabold tracking-wide justify-center m-auto text-4xl">What is FLiC</h3>
							</div>
							<p class="font-light justify-center text-center">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
								quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tenetur, hic minima. Corrupti voluptas vitae tenetur commodi
								error cumque consequuntur neque possimus. Molestias.Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Modi, quaerat?Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Tenetur, hic minima.
								Corrupti voluptas vitae tenetur commodi error cumque consequuntur
								neque possimus. Molestias.
							</p>
						</div>
						<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-300 pointer-events-none rounded"></div>
							</div>
							<div class="w-6 h-6 absolute bottom-3/4 -mb-1 rounded-full bg-white shadow"></div>
						</div>
					</div>

					<div class="flex md:contents">
						<div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
							</div>
							<div class="w-6 h-6 absolute top-1/4 -mt-3 rounded-full bg-white shadow"></div>
						</div>
						<div class="col-start-6 col-end-10 p-4 my-8">
						<div class = "mx-auto w-1/3 bg-gradient-to-r from-[#2F2A7B]  to-[#39B54A] text-transparent bg-clip-text pb-4">
							<h3 class="font-['Epilogue'] antialiased flex font-extrabold tracking-wide justify-center m-auto text-4xl">Why is FLiC</h3>
							</div>
							<p class="font-light justify-center text-center">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
								facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Tenetur, hic minima. Corrupti voluptas vitae tenetur commodi
								error cumque consequuntur neque possimus. Molestias.Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Modi, quaerat?Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Tenetur, hic minima.
								Corrupti voluptas vitae tenetur commodi error cumque consequuntur
								neque possimus. Molestias.
							</p>
						</div>
					</div>
					<div class="flex flex-row-reverse md:contents">
						<div class="col-start-2 col-end-5 p-5 my-8">
						<div class = "mx-auto w-2/5 bg-gradient-to-r from-[#2F2A7B]  to-[#39B54A] text-transparent bg-clip-text pb-4">
						<h3 class = "font-['Epilogue'] antialiased flex font-extrabold tracking-wide justify-center m-auto text-4xl">Our Mission</h3>
						</div>
							<p class="font-light justify-center text-center">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
							facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Tenetur, hic minima. Corrupti voluptas vitae tenetur commodi
							error cumque consequuntur neque possimus. Molestias.Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Modi, quaerat?Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Tenetur, hic minima.
							Corrupti voluptas vitae tenetur commodi error cumque consequuntur
							neque possimus. Molestias.
							</p>
						</div>
						<div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
							<div class="h-full w-6 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-300 pointer-events-none rounded"></div>
							</div>
							<div class="w-6 h-6 absolute bottom-3/4 -mb-1 rounded-full bg-white shadow"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
