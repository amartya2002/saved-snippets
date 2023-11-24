import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css'
const index = () => {
  return (
    <>



<section className="bg-gradient-to-l from-gray-300 to-white h-screen ">

<div className=" px-5 py-12 flex h-screen  md:px-12 lg:px-16 max-w-7xl mx-auto gap-8">
  <div className="flex w-full mx-auto">
    <div className="relative inline-flex items-center m-auto align-middle">
      <div className="relative max-w-6xl p-10 overflow-hidden border-t-2 border-orange-500 bg-white rounded-3xl lg:p-20 shadow-2xl">
        <div className="relative max-w-lg">
          <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
Entropy UI
</p>
<p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
Entropy UI is a versatile and powerful UI component library designed to streamline your web development workflow
</p>
</div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <Link href="Docs/introduction" className="items-center justify-center w-full px-4 py-2 text-center text-gray-200 duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
             Go to Docs 
            </Link>
            <Link target='_blank' href="https://nextra.site/" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
              Learn more
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>

  









  
</div>
{/* <p className='text-center text-xl font-semibold text-gray-600'>Happy Coding!</p> */}

</section>

</>



  );
};

export default index;
