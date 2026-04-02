import React, { use, useState } from 'react'
import Country from '../Country/Country'

const Countries = ({ contriesPromise }) => {
  const countriesData = use(contriesPromise)
  const countries = countriesData.countries
  // console.log(countries)
  const [visitedCountry, setVisitedCountry] = useState([])
  const [flags, setFlags] = useState([])
  // const [travel, setTravel]=useState([])

  const handleVisitedCountry = (country) => {
    // console.log(country)
    const newVisitedCountry = [...visitedCountry, country]
    setVisitedCountry(newVisitedCountry)
  }

  const handleFlags = (country) => {
    // console.log('flags Show')
    console.log(country);

    const newFlag = [...flags, country]
    setFlags(newFlag)
  }

  // const handleTravel=(country)=>{
  //   // console.log('effective data',country);
  //   const newTravel=[...travel, country]
  //   setTravel(newTravel)
    
  // }
  return (
    <div className='bg-cyan-600 p-2'>

      <h1 className='text-center my-4 text-5xl font-bold mt-5'>World countries </h1>
      <h2 className='text-center my-4 text-3xl font-bold'>Visited Country length {visitedCountry.length}</h2>
      <ol className='text-center list-decimal list-inside '>
        {
          visitedCountry.map(country => <li key={country.cca3.cca3}>

            {country.name.common}
          </li>)
        }
      </ol>
      {/* <ol className='text-center list-decimal list-inside '>
        {
          travel.map(country => <li key={country.cca3.cca3}>

            {country.name.common}
          </li>)
        }
      </ol> */}
      {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8 overflow-hidden rounded-lg shadow-md border border-gray-200'>
        {
          flags.map((flag, index) => <img className='w-full object-cover' key={index} src={flag}></img>)
        }
      </div> */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8'>
        {
          flags.map((flag, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md border border-gray-200"
            >
              <img
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                src={flag}
                alt="flag"
              />
            </div>
          ))
        }
      </div>


      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleFlags={handleFlags}
            // handleTravel={handleTravel}

          ></Country>)
        }
      </div>

    </div>
  )
}

export default Countries