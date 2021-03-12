import Container from "react-bootstrap/Container"
import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {
  const [bears, setBears] = useState([])

  const getBears = async () => {
    try {
      const { data } = await axios.get("/api/bears")
      setBears(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBears()
  }, [])

  const bearList = () => {
    return bears.map((bear, index) => (
      <li key={bear}>
        {index + 1}. {bear}
      </li>
    ))
  }

  return (
    <main>
      <Container className="text-center py-5">
        <h2>Bears in Canada</h2>
        <div>
          <ul>{bearList()}</ul>
        </div>
      </Container>
    </main>
  )
}

export default App
