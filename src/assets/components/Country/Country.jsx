import React, { useState } from 'react'

const Country = ({country, handleVisitedCountry, handleFlags}) => {
    // console.log(handleVisitedCountry)
    // console.log(country.name.common);
    // console.log(country.name.official)
    // console.log(handleTravel);
    
    const [visited, setVisited]=useState(false)
    const handleVisited =()=>{
      setVisited(!visited)
      handleVisitedCountry(country)
    }
    
  return (
    <div className= {`  ${visited ? 'p-5 rounded-3xl shadow-lg border border-gray-100 bg-sky-300' : 'p-5 rounded-3xl shadow-lg border border-gray-100'}`} >
        <img className='w-full h-60 object-cover rounded-md' src={country.flags.flags.png} alt="" />
        <h1>Name  {country.name.common} </h1>
        <h1>Population  {country.population.population} </h1>
        <h1>Area   {country.area.area} {country.area.area>3000 ?'Big Country':'Small Country'}</h1>
        <h1>Capital   {country.capital.capital} </h1>
        <h1>Region :  {country.region.region} </h1>
        <button onClick={handleVisited} className={`btn text-2xl font-bold p-3 mt-2 rounded-2xl cursor-pointer text-white transition-colors duration-300 
                ${visited ? 'bg-green-500' : 'bg-red-500'}`}>{visited ? 'Visited' : 'Not Visited'}
        </button>
        <button onClick={()=>handleFlags(country.flags.flags.png)} className='ml-2 bg-yellow-200 p-4 rounded-2xl cursor-pointer'>Visited Flag</button>
        {/* <h1>Currencies   {country.currencies.currencies.JMD.name} </h1> */}
        {/* <button onClick={()=>handleTravel(country)} className='bg-pink-300 p-4 ml-2 rounded-2xl cursor-pointer text-xl font-semibold '>Travel</button> */}
       
    </div>
  )
}

export default Country