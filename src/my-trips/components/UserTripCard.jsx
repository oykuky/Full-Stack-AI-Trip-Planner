import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {
  const [photoUrl,setPhotoUrl] = useState();

  useEffect(()=>{
    trip&&GetPlaceImg();
  },[trip])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:trip?.userSelection?.location
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
   <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all hover:shadow-sm'>
     <img src={photoUrl}  className='rounded-xl h-[200px] w-full object-cover'/>
      <div>
      <h2 className='font-medium text-lg'>{trip?.userSelection?.location}</h2>
      <h2 className="text-sm text-gray-600" >{trip?.userSelection?.totalDays} Days trip with {trip?.userSelection?.budget} </h2>
      </div>
    </div>
   </Link>
  )
}

export default UserTripCard
