import ReactGoogleAutocomplete from "react-google-autocomplete"


function CreateTrip() {
  return (
    <div className="flex flex-col mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-600 text-xl">Just provide some basic information,and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className="flex flex-col mt-20">
        <label className="text-xl my-3 font-medium">What is destination of choice?</label>
        <ReactGoogleAutocomplete 
        apiKey=""
        />
        <label className="text-xl my-3 font-medium">How many days are you planning your trip?</label>
        <input type="text" name="trip-days"/>
        <label className="text-xl my-3 font-medium">What is Your Budget?</label>
      </div>

    </div>
  )
}

export default CreateTrip
// AIzaSyC4uqZiYTyD561ZkNU2PGrfBFH4pGf66sc