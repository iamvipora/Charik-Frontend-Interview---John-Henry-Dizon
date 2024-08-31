import React from 'react'

function PricingBox({ item }) {
  // Component for rendering the pricing data
  return (
    <div className='flex flex-col justify-between border rounded-3xl p-4'>
      <h1 className='text-4xl font-semibold'>{item.type}</h1>
      <p className='text-sm text-[#919191]'>{item.description}</p>
      <ul className='text-sm my-4'>
        {item.benefits.map((item, key) => {
          return (
            <li key={key}>✓ {item}</li>
          )
        })}
      </ul>
      <h1 className='text-4xl'>{item.currency + item.price}<span className='text-sm text-[#919191]'>{item.priceDesc}</span></h1>
      <div className='flex justify-center w-full'>
        <button
          className='w-56 border rounded-full p-4 mt-4 hover:text-[#1A1A1A] relative flex items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-white hover:before:h-56 hover:before:w-56'
          onClick={() => navigate('/pricing')}
        >
          <span className='relative z-10'>Subscribe</span>
        </button>
      </div>
    </div>
  )
}

export default PricingBox