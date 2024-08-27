# useEffect_fetch

##

###

#### basic fetch

App.jsx

```jsx
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
```

```.env
NASA=dPELSeuSkxDP9X5IJdV1Mn9w4MifeGUfYlAzhKVe
```
