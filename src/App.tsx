import React, { useState } from 'react'
import './App.css'
import { CITIES } from './global'

import ForecastCard from './components/forecast-card/forecast-card'
import Placeholder from './components/placeholder/placeholder'
import WeatherCard, { WeatherCardData } from './components/weather-card/weather-card'
import { CitySelector, DateSelector } from './components/selectors/selectors'

import getData from './controllers/get-api-data'
import Carousel from './components/carousel/carousel'
import getUrl from './controllers/get-api-url'
import getCityCoords from './controllers/get-city-coords'
import { handleDailyResponse, handlePastResponse } from './controllers/api-response-handler'


function App () {
    
  const cities = CITIES.map((elem) => elem.name)

  const [cityDaily, setCityDaily] = useState('default')
  const [cityPast, setCityPast] = useState('default')
  const [datePast, setDatePast] = useState('')
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isPastDataLoaded, setIsPastDataLoaded] = useState(false)

  const [carouselData, setCarouselData] = useState<WeatherCardData[]>([{
      date: 'date',
      icon: 'icon',
      caption: 'caption',
      temperature: 'temperature'
    }]
    )
  const [pastWeatherData, setPastWeatherData] = useState<WeatherCardData>({
    date: 'date',
    icon: 'icon',
    caption: 'caption',
    temperature: 'temperature'
  })

  const getCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value
    if (event.target.id == 'city-selector-1') {
      setCityDaily(city)
      showDailyForecast(city)
    } else {
      setCityPast(city)
      if (datePast !== '') showPastForecast (city, datePast)
    }
  }

  const getPastDate = (inputDateValue: string) => {
    setDatePast(inputDateValue)
    if (cityPast !== 'default') showPastForecast (cityPast, inputDateValue)
  }

  async function showDailyForecast (cityName: string) {
    setIsDataLoaded(false)
    const {lat, lon} = getCityCoords(cityName)
    
    const forecastData = await getData(getUrl(lat, lon))  

    setCarouselData(handleDailyResponse(forecastData))
    setIsDataLoaded(true)
  }

  async function showPastForecast (cityName: string, date: string) {
    if (isPastDataLoaded) setIsPastDataLoaded(false)

    const {lat, lon} = getCityCoords(cityName)

    const inputtedDate = new Date(date)
    inputtedDate.setHours(12)  // for load day icon instead night
    const dateRequest = (Math.floor(inputtedDate.getTime() / 1000)).toString()

    const url = getUrl(lat, lon, dateRequest)
    const forecastData = await getData(url)

    setPastWeatherData(handlePastResponse(forecastData))
    setIsPastDataLoaded(true)
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
            : <Carousel weatherData = {carouselData} /> 
          }
        </ForecastCard>

        <ForecastCard 
          cardTitle = { 'Forecast for a Date in the Past' }
          citySelector = { <CitySelector id='city-selector-2' cities = {cities} handleSelect = { getCity }/> }
          dateSelector = {<DateSelector id='date-selector-1' handleSelect = { getPastDate } /> }
        >
          { cityPast == 'default' || datePast == '' || !isPastDataLoaded
            ? <Placeholder /> 
            : <WeatherCard date={ pastWeatherData.date } icon={ pastWeatherData.icon } caption={ pastWeatherData.icon } temperature={ pastWeatherData.temperature } /> 
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
