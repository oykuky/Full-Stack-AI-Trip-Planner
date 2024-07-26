import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PlaceCardItem from './PlaceCardItem';

function TripPlace({trip}) {
  
  return (
    <div className='my-4'>
      <h2 className='font-bold text-xl'>Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary?.map((item,i)=>(
            <div key={i}>
                <h2 className='font-medium text-l'>Day {item?.day}</h2>
                <div className='grid md:grid-cols-2 gap-4'>
                        {item.plan?.map((place,index)=>(
                          <PlaceCardItem place={place}/>
                        ))}
                    </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TripPlace
