import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const url = `https://api.nasa.gov/planetary/apod?${VITE_NASA}`
  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(url)
    console.log(response)
  }

  useEffect(() => fetchData(), [])

  if (loading) {
    return (
      <main>
        <p>loading</p>
      </main>
    )
  }
  return (
    <main>
      <p>data</p>
    </main>
  )
}

export default App
