import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('/api/user/abc-123')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <p>Hola mundo</p>
    </div>
  )
}

export default App
