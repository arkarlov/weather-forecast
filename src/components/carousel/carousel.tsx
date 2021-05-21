import React, { useState } from 'react'
import WeatherCard, { WeatherCardData } from '../weather-card/weather-card'
import './carousel.css'

type CarouselProps = {
  weatherData: WeatherCardData[]
}


function Carousel (props: CarouselProps) {

  const { weatherData } = props

  console.log(weatherData)

  const showCardFrom = 1

  const weatherCards = weatherData.map((data) => {
    return <WeatherCard key={data.date} date={ data.date } icon={ data.icon } caption={ data.caption } temperature={ data.temperature } />
  })

  return (
    <div className="carousel" >
      <button className="carousel__button carousel__button_left button button_prev button_disabled"></button>
      <div className="carousel__content">
        <div className="carousel__track">
          {
                        
            weatherCards.map((card, index) => {
              if (index >= showCardFrom && index < showCardFrom + 3) {
                return card
              }
            })
            
          }
        </div>
      </div>            
      <button className="carousel__button carousel__button_right button button_next"></button>
    </div>
  )

}

export default Carousel