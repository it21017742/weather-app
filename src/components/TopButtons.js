import React from 'react'

function TopButtons() {
  const cities = [
    {
        id: 1,
        title: 'Colombo'
    }
  ]

  return <div className='flex items-center justify-center my-6'>
    {cities.map((city) => {
      return <button className='text-white text-lg font-medium'>
        {city.title}
      </button>
    })}
  </div>

}

export default TopButtons;
