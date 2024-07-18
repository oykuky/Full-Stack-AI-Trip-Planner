import React, { useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { Input } from "@/components/ui/input"
import { SelectBudgetOptions } from "@/constants/options"

function CreateTrip() {
  const [place,setPlace]=useState()
  return (
    <div className="flex flex-col mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-600 text-xl">Just provide some basic information,and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className="flex flex-col mt-20 gap-9">
       <div>
        <label className="text-xl my-3 font-medium">What is destination of choice?</label>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v); console.log(v)}
          }}
        />
       </div>
        <div>
          <label className="text-xl my-3 font-medium">How many days are you planning your trip?</label>
          <Input placeholder={'ex.3'} type='number'/>
        </div>

        <div>
          <label className="text-xl my-3 font-medium">What is Your Budget?</label>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item,index)=>(
              <div key={index} className="cursor-pointer p-4 border rounded-lg hover:shadow-lg">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateTrip
