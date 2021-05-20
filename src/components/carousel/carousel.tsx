import React from 'react'
import WeatherCard from '../weather-card/weather-card'
import './carousel.css'

import placeholderImage from '../../assets/Placeholder/Academy-Weather-bg160.png'


const date = new Date();
const icon = placeholderImage
const caption = 'test'
const temperature = '+17'

function Carousel () {

  return (
    <div className="carousel" >
      <button className="carousel__button carousel__button_left button button_prev button_disabled"></button>
      <div className="carousel__content">
        <div className="carousel__track">
          {
            <WeatherCard date={date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})} icon={icon} caption={caption} temperature={temperature} />
          }
                    {
            <WeatherCard date={date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})} icon={icon} caption={caption} temperature={temperature} />
          }
                    {
            <WeatherCard date={date.toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})} icon={icon} caption={caption} temperature={temperature} />
          }
        </div>
      </div>            
      <button className="carousel__button carousel__button_right button button_next"></button>
    </div>
  )

}

export default Carousel