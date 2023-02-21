import React from 'react'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <Jumbotron />
        <div className='cards-box mb-4'>
          <Card
            imageUrl={'https://via.placeholder.com/500x325'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
