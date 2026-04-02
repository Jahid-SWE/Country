
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/Countries/Countries'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h1 className='text-center font-bold text-6xl mt-96 animate-spin'>Loading </h1>}>
        <Countries contriesPromise={contriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
