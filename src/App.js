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
        <div className='row d-flex justify-content-between mb-4 '>
          <Card
            imageUrl={'https://via.placeholder.com/500x325'}
            title={'Card title'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          />
          <Card
            imageUrl={'https://via.placeholder.com/500x325'}
            title={'Card title'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
          />
          <Card
            imageUrl={'https://via.placeholder.com/500x325'}
            title={'Card title'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
          />
          <Card
            imageUrl={'https://via.placeholder.com/500x325'}
            title={'Card title'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
          />
        </div>
      </div>
      <Footer
        website={'Your Website'}
        year={'2022'}
      />
    </div>
  )
}

export default App
