import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                Wednesday, 18 October 2023 | Local time : 12:10 AM
            </p>
        </div>

        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
                Colombo, Sri Lanka
            </p>

        </div>

    </div>
  )
}

export default TimeAndLocation;