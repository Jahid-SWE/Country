import React, { use, useState } from 'react'
import Country from '../Country/Country'

const Countries = ({ contriesPromise }) => {
  const countriesData = use(contriesPromise)
  const countries = countriesData.countries
  // console.log(countries)
  const [visitedCountry, setVisitedCountry]=useState([])
  const handleVisitedCountry=(country)=>{
    console.log(country)
  }
  return (
    <div>
      <h1 className='text-center my-4 text-5xl font-bold'>This is a world countries {countries.length}</h1>
      <h2 className='text-center my-4 text-3xl font-bold'>Visited Country length {visitedCountry.length}</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          countries.map(country => <Country 
            key={country.cca3.cca3} 
            country={country}
            handleVisitedCountry={handleVisitedCountry}

          ></Country>)
        }
      </div>

    </div>
  )
}

export default Countries