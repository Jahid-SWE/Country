
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/Countries/Countries'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h1>Data is loading</h1>}>
        <Countries contriesPromise={contriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
