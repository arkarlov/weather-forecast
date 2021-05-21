import React, { useState } from 'react'
import WeatherCard, { WeatherCardData } from '../weather-card/weather-card'
import './carousel.css'

type CarouselProps = {
  weatherData: WeatherCardData[]
}


function Carousel (props: CarouselProps) {

  const { weatherData } = props


  const [firstShownCardNumber, setFirstShownCardNumber] = useState(1)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let index = firstShownCardNumber
    if (event.currentTarget.id == 'button-next') {
      index++
      setFirstShownCardNumber(index)
    } else {
      index--
      setFirstShownCardNumber(index)
    }
  }

  const weatherCards = weatherData.map((data) => {
    return <WeatherCard key={data.date} date={ data.date } icon={ data.icon } caption={ data.caption } temperature={ data.temperature } />
  })

  return (
    <div className="carousel" >
      <button id="button-prev" className={`carousel__button carousel__button_left button button_prev ${firstShownCardNumber == 1 ? `button_disabled` : ``}`} onClick={ handleClick }></button>
      <div className="carousel__content">
        <div className="carousel__track">
          {
                        
            weatherCards.map((card, index) => {
              if (index >= firstShownCardNumber && index < firstShownCardNumber + 3) {
                return card
              }
            })
            
          }
        </div>
      </div>            
      <button id="button-next" className={`carousel__button carousel__button_right button button_next ${firstShownCardNumber == 5 ? `button_disabled` : ``}`} onClick={ handleClick }></button>
    </div>
  )

}

export default Carousel