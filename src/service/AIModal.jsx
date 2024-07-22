/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas,for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The Orleans Hotel & Casino\",\n      \"hotelAddress\": \"4500 W. Tropicana Ave, Las Vegas, NV 89103\",\n      \"price\": \"$60 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.theorleans.com/content/dam/caesars-entertainment/orleans/orleans-hotel-casino/hero-images/orleans-hotel-casino-hero-image.jpg\",\n      \"geoCoordinates\": \"36.0999° N, 115.1847° W\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A classic Las Vegas hotel with a casino, multiple restaurants, and a pool. It's known for its affordability and proximity to the Strip.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://media.cntraveler.com/photos/59a4d02162172a4a0489a7a5/master/w_1600,c_limit/CircusCircusHotel.jpg\",\n      \"geoCoordinates\": \"36.1097° N, 115.1725° W\",\n      \"rating\": \"3 stars\",\n      \"description\": \"A family-friendly hotel with a carnival theme, a large casino, and budget-friendly dining options.\"\n    },\n    {\n      \"hotelName\": \"The Strat Hotel, Casino & SkyPod\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"$50 - $90 per night\",\n      \"hotelImageUrl\": \"https://www.thestrat.com/content/dam/caesars-entertainment/strat/strat-hotel-casino-skypod/hero-images/strat-hotel-casino-skypod-hero-image-02.jpg\",\n      \"geoCoordinates\": \"36.1169° N, 115.1672° W\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A towering hotel with a casino, multiple restaurants, a thrilling observation deck, and a unique retro-futuristic vibe.\"\n    },\n    {\n      \"hotelName\": \"The Golden Nugget Hotel & Casino\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $120 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/content/dam/caesars-entertainment/golden-nugget-las-vegas/golden-nugget-hotel-casino/hero-images/golden-nugget-hotel-casino-hero-image-01.jpg\",\n      \"geoCoordinates\": \"36.1681° N, 115.1447° W\",\n      \"rating\": \"4 stars\",\n      \"description\": \"A luxurious hotel with a casino, a shark tank, multiple restaurants, and a lively atmosphere. It's located in the historic Fremont Street Experience.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Experience a vibrant pedestrian mall with a canopy of lights, live music, street performers, and casinos.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fremont_Street_Experience%2C_Las_Vegas%2C_Nevada.jpg/1280px-Fremont_Street_Experience%2C_Las_Vegas%2C_Nevada.jpg\",\n          \"geoCoordinates\": \"36.1691° N, 115.1436° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Evening (7:00 PM - 11:00 PM)\"\n        },\n        {\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"A quirky, themed restaurant known for its indulgent and unhealthy food. Try the Quadruple Bypass Burger for a unique experience.\",\n          \"placeImageUrl\": \"https://www.lasvegas.com/uploads/cms/document/468/heart-attack-grill-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1701° N, 115.1416° W\",\n          \"ticketPricing\": \"Budget-friendly\",\n          \"rating\": \"3.5 stars\",\n          \"time\": \"Dinner (8:00 PM - 10:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Explore the iconic Las Vegas Strip, lined with casinos, resorts, and entertainment venues.\",\n          \"placeImageUrl\": \"https://www.lasvegas.com/uploads/cms/document/1898/las-vegas-strip-daytime.jpg\",\n          \"geoCoordinates\": \"36.1146° N, 115.1729° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"5 stars\",\n          \"time\": \"Morning (10:00 AM - 2:00 PM)\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and sculptures in a beautifully designed conservatory.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bellagio_Conservatory_Botanical_Garden_Las_Vegas.jpg/1280px-Bellagio_Conservatory_Botanical_Garden_Las_Vegas.jpg\",\n          \"geoCoordinates\": \"36.1180° N, 115.1737° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Witness a spectacular water and light show choreographed to music.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/caesars-entertainment/bellagio/bellagio-hotel-casino/hero-images/bellagio-hotel-casino-hero-image-01.jpg\",\n          \"geoCoordinates\": \"36.1180° N, 115.1737° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"5 stars\",\n          \"time\": \"Evening (8:00 PM - 9:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Enjoy scenic drives, hiking trails, and rock formations in a nearby desert landscape.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/RedRockCanyon_web_large.jpg\",\n          \"geoCoordinates\": \"36.1708° N, 115.3075° W\",\n          \"ticketPricing\": \"Entrance fee: $15 per vehicle\",\n          \"rating\": \"4.5 stars\",\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"Explore a collection of vintage neon signs from Las Vegas's past. \",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Neon_Museum_Las_Vegas.jpg/1280px-Neon_Museum_Las_Vegas.jpg\",\n          \"geoCoordinates\": \"36.1674° N, 115.1363° W\",\n          \"ticketPricing\": \"$20 per person\",\n          \"rating\": \"4 stars\",\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Explanation:**\n\nThis JSON data provides a travel plan for a couple in Las Vegas on a cheap budget. Here's a breakdown of the elements:\n\n* **hotelOptions:** This section lists affordable hotel choices, including their names, addresses, prices, image URLs, coordinates, ratings, and descriptions. This allows travelers to choose the best option based on their preferences.\n* **itinerary:** This section details the 3-day itinerary with each day's plan. \n    * **day:** Indicates the day of the itinerary.\n    * **plan:** Lists the places to visit on each day.\n        * **placeName:** Name of the attraction or location.\n        * **placeDetails:** Provides a brief description of the place.\n        * **placeImageUrl:** Includes a URL for an image of the place.\n        * **geoCoordinates:** Offers the geographic coordinates for easy location finding.\n        * **ticketPricing:** Indicates the cost of admission, if applicable.\n        * **rating:** Provides a general star rating for the place.\n        * **time:** Suggests the best time to visit each location.\n\n**Additional Notes:**\n\n* This itinerary focuses on free or budget-friendly activities, considering the budget constraint.\n* The \"Time\" suggestions are flexible and can be adjusted based on individual preferences and interests.\n* Travelers can find more detailed information and reviews for each place online.\n\nThis JSON format makes it easy for travelers to access and organize their Las Vegas trip planning information. \n"},
          ],
        },
      ],
    });
  
 
  
  