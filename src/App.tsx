import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('/users')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])

  return (
    <div>
      <p>Hola mundo</p>
    </div>
  )
}

export default App
