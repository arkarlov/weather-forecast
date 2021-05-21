import React, { useState } from 'react'
import './App.css'
import { CITIES } from './global'

import ForecastCard from './components/forecast-card/forecast-card'
import Placeholder from './components/placeholder/placeholder'
import WeatherCard, { WeatherCardData } from './components/weather-card/weather-card'
import placeholderImage from './assets/Placeholder/Academy-Weather-bg160.png'
import { CitySelector, DateSelector } from './components/selectors/selectors'
import getData from './controllers/get-api-data'
import Carousel from './components/carousel/carousel'
import getUrl from './controllers/get-api-url'
import getCityCoords from './controllers/get-city-coords'
import { handleDailyResponse } from './controllers/api-response-handler'


function App () {

    
  const cities = CITIES.map((elem) => elem.name)

  const [cityDaily, setCityDaily] = useState('default')
  const [cityPast, setCityPast] = useState('default')
  const [datePast, setDatePast] = useState('')
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const getCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value
    if (event.target.id == 'city-selector-1') {
      setCityDaily(city)
      showData(city)
    } else {
      setCityPast(city)
    }
  }

  const getDate = (inputDateValue: string) => {
    setDatePast(inputDateValue)
  }

  
  const icon = placeholderImage
  const caption = 'test'
  const temperature = '+17'


  
  let carouselData: Array<WeatherCardData> = [{
    date: 'strinlg',
    icon: 'string',
    caption: 'string',
    temperature: 'string'
  },
  {
    date: 'string',
    icon: 'string',
    caption: 'string',
    temperature: 'string'
  }]

  async function showData (cityName: string) {
    const {lat, lon} = getCityCoords(cityName)
    const forecastData = await getData(getUrl(lat, lon))  
    carouselData = handleDailyResponse(forecastData)
    setIsDataLoaded(true)
    console.log(carouselData)
    console.log(forecastData)
  }  






  return (
    <div className='app'>
      <h1 className="app__title">
        <span className="app__title-top">weather</span>
        <span className="app__title-bottom">forecast</span>
      </h1>

      <main className="app__main">
        <ForecastCard 
          cardTitle = { '7 Days Forecast' }
          citySelector = { <CitySelector id='city-selector-1' cities = {cities} handleSelect = { getCity } /> }
        > 
          { cityDaily == 'default' || !isDataLoaded  
            ? <Placeholder /> 
            : <Carousel weatherData = {carouselData} check = {isDataLoaded} /> 
          }
        </ForecastCard>

        <ForecastCard 
          cardTitle = { 'Forecast for a Date in the Past' }
          citySelector = { <CitySelector id='city-selector-2' cities = {cities} handleSelect = { getCity }/> }
          dateSelector = {<DateSelector id='date-selector-1' handleSelect = {getDate} /> }
        >
          { cityPast == 'default' || datePast == '' 
            ? <Placeholder /> 
            : <WeatherCard date={new Date(datePast).toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})} icon={icon} caption={caption} temperature={temperature} /> 
          }
        </ForecastCard>
      </main>

      <footer className="app__footer">
        <p className="app__footer-caption">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</p>
      </footer>
    </div>
  )
}

export default App
