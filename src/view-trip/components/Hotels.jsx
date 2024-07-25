import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl my-7'>Hotel Recommendation</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {trip?.tripData?.hotelOptions?.map((item,index) =>(
                 <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotelName+ "," +item?.hotelAddress} target='_blank'>
                    <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                        <img src={item?.hotelImageUrl} width={130} height={130} alt="hotel-img"/>
                        <div className='my-3 py-2'>
                            <h2 className='font-medium'>{item?.hotelName}</h2>
                            <h2 className='text-xs text-gray-500'>📍{item?.hotelAddress} </h2>
                            <h2 className='text-sm'>💰{item?.price}</h2>
                            <h2 className='text-sm'>⭐{item?.rating} </h2>
                        </div>
                    </div>
                    
                 </Link>    
                ))}
        </div>
    </div>
  )
}

export default Hotels
