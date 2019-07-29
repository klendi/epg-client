import React, { useState } from 'react'
import Navbar from './components/NavBarComponent'
import { Container, Button } from 'react-bootstrap'
import axios from 'axios'
import xml2js from 'xml2js'

function App() {
  const parser = new xml2js.Parser()
  const [success, setSuccess] = useState(false)

  const handleFileChosen = file => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }
  let fileReader

  const handleFileRead = () => {
    const content = fileReader.result
    console.log('read the file')

    parser.parseString(content, (err, result) => {
      if (err) throw new Error(err)
      console.log(result)

      axios
        .post('http://localhost:5001/epg', result)
        .then(response => {
          console.log(response)
          setSuccess(true)
        })
        .catch(err => {
          throw new Error(err)
        })
    })
  }

  return (
    <div>
      <Navbar />
      <Container>
        <br />
        <h5>Browse or drag n drop epg xml files</h5>
        <br />
        <input
          accept='text/xml'
          type='file'
          id='file'
          onChange={e => handleFileChosen(e.target.files[0])}
        />
        <br />
        <br />
        {success ? <h5>Done</h5> : null}
      </Container>
    </div>
  )
}

export default App
