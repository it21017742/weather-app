import React from 'react'

function TopButtons() {
  const cities = [
    {
        id: 1,
        title: 'Colombo'
    },
    {
        id: 1,
        title: 'Trico'
    },
    {
        id: 1,
        title: 'Kandy'
    },
    {
        id: 1,
        title: 'Galle'
    },
    {
        id: 5,
        title: 'Jaffna'
    },
  ];

 return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city)=>
            <button key={city.id} className="text-white text-lg font-medium">
                {city.title}
            </button>)}
    </div>
 )
}

export default TopButtons;
