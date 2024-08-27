import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const nasaApiKey =
    'dPELSeuSkxDP9X5IJdV1Mn9w4MifeGUfYlAzhKVe' || import.meta.env.VITE_NASA
  const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
  const simpleURL = `https://api.nasa.gov/planetary/apod?api_key=dPELSeuSkxDP9X5IJdV1Mn9w4MifeGUfYlAzhKVe`

  const jsonPlaceHolder = 'https://jsonplaceholder.typicode.com/todos/1'
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(jsonPlaceHolder)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        {data ? <p>{JSON.stringify(data)}</p> : <p>No data available</p>}
      </main>
    )
  }
  return (
    <main>
      {data ? <p>{JSON.stringify(data)}</p> : <p>No data available</p>}
    </main>
  )
}

export default App
