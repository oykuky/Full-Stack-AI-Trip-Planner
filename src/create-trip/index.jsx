import React, { useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { Input } from "@/components/ui/input"
import { SelectBudgetOptions } from "@/constants/options"
import { SelectTravelList } from "@/constants/options"
import { Button } from "@/components/ui/button"

function CreateTrip() {
  const [place,setPlace]=useState()
  return (
    <div className="mt-12 sm:px-10 md:px-32 lg:px-32 xl:px-30">
     <div className="text-center ">
     <h2 className="font-bold text-3xl ">Tell us your travel preferences 🌍✈️🌴</h2>
     <p className="mt-3 text-gray-600 text-xl">Just provide some basic information,and our trip planner will generate a customized itinerary based on your preferences.</p>
     </div>

      <div className="mt-20 gap-10 py-1 px-32">
       <div className="mb-5 px-32">
        <label className="text-xl mb-3 font-medium">What is destination of choice?</label>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v); console.log(v)}
          }}
        />
       </div>

        <div className="mb-5 px-32">
          <label className="text-xl font-medium">How many days are you planning your trip?</label>
          <Input placeholder={'ex.3'} type='number'/>
        </div>

        <div className="px-32">
            <label className="text-xl my-3 font-medium">What is Your Budget?</label>
            <p>The budget is exclusively allocated for activities and dining purposes. </p>
            <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
              {SelectBudgetOptions.map((item,index)=>(
                <div key={index} className="cursor-pointer p-4 border rounded-lg hover:shadow-lg">
                  <h2 className="text-3xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>

            <label className="text-xl font-medium my-3"> Who do you plan on traveling with on your next adventure?</label>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelList.map(( item,index)=>(
                <div key={index} className="cursor-pointer p-4 border rounded-lg hover:shadow-lg">
                  <h2 className="text-3xl">{item.icon}</h2> 
                  <h2 className="text-lg font-bold">{item.title}</h2> 
                  <h2 className="text-sm text-gray-500">{item.desc}</h2> 
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className="my-10 flex justify-end ">
        <Button>Generate Trip</Button>
      </div>
    </div>
  )
}

export default CreateTrip
