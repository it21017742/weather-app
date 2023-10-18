import React from 'react'

function Forecast() {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">Daily Forecast</p>
        </div>
        <hr className="my-2"/>

        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">Wednesday</p>
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    className="w-12 my-1"
                    alt=""
                    />
                <p className="font-medium">28°C</p>    
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">Thursday</p>
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    className="w-12 my-1"
                    alt=""
                    />
                <p className="font-medium">28°C</p>    
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">Friday</p>
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    className="w-12 my-1"
                    alt=""
                    />
                <p className="font-medium">28°C</p>    
            </div>
            
        </div>

    </div>
  )
}

export default Forecast;