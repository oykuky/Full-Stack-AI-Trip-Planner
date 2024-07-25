import React from 'react'

function TripPlace({trip}) {
    console.log(trip?.itinerary)
  return (
    <div className='my-4'>
      <h2 className='font-bold text-xl'>Places to Visit</h2>
      <div>
        {trip.tripData?.itinerary?.map((item,index)=>(
            <div key={index}>
                <h2 className='font-medium text-l'>Day {item?.day}</h2>
                <div className='grid grid-cols-2 gap-4'>
                    {item.plan?.map((place,index)=>(
                        <div key={index} className='my-4 bg-gray-100 p-2 gap-2 border rounded-lg flex flex-cols-2 hover:scale-105 '>
                            <div className='py-2 mx-3'>
                                <img src='/public/road-trip-vacation.jpg' className='w-[120px] h-[120px] rounded-xl'/>
                            </div>
                            <div>
                                <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                                <h2 className='font-bold'>{place.placeName}</h2>
                                <p className='text-sm text-gray-500'>{place.placeDetails}</p>
                                <h2 className='text-blue-700 text-sm'>{place.ticketPricing}</h2>
                                <h2 className='text-blue-700 text-sm'>{place.timeToTravel}</h2>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TripPlace
