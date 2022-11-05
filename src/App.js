import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUrl, setGitHubUrl] = useState('')
  const [gitHubImageUrl, setGitHubImageUrl] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/RubyTuesday77')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubUrl(data.html_url)
        setGitHubImageUrl(data.avatar_url)
      })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{ gitHubName }</h2>
      <a href={ gitHubUrl }>
        <button>Link to Profile</button>
      </a>
      <br/>
      <img src={ gitHubImageUrl } alt='Github profile' width='200' height='200' />
    </div>
  )
}

export default App