import React from 'react'
import logo from './logo.svg'
import './App.css'

import ForecastCard from './components/forecast-card/forecast-card'
import Placeholder from './components/placeholder/placeholder'
import WeatherCard from './components/weather-card/weather-card'
import placeholderImage from './assets/Placeholder/Academy-Weather-bg160.png'
import { CitySelector, DateSelector } from './components/selectors/selectors'
import GetData from './controllers/get-data'
import Carousel from './components/carousel/carousel'

const cities = ["moscow", "samara", "kazan", "saratov", "volgograd", "izhevsk", 'penza']

function App () {
  const date = new Date();
  const icon = placeholderImage
  const caption = 'test'
  const temperature = '+17'

  GetData()


  return (
    <div className='app'>
      <h1 className="app__title">
        <span className="app__title-top">weather</span>
        <span className="app__title-bottom">forecast</span>
      </h1>

      <main className="app__main">
        <ForecastCard 
          cardTitle = { '7 Days Forecast' }
          citySelector = { <CitySelector cities = {cities} /> }
          content ={ <Carousel /> }
        />
        <ForecastCard 
          cardTitle = { 'Forecast for a Date in the Past' }
          citySelector = { <CitySelector cities = {cities} /> }
          dateSelector = {<DateSelector /> }
          content ={ <WeatherCard date={date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})} icon={icon} caption={caption} temperature={temperature} /> }
        />
      </main>

      <footer className="app__footer">
        <p className="app__footer-caption">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</p>
      </footer>
    </div>
  )
}

export default App
