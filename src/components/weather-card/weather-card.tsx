import React from 'react'
import { JsxElement } from 'typescript'
import './weather-card.css'

type ComponentProps = {
  date: string,
  icon: string
  caption: string,
  temperature: string
}

function WeatherCard (props: ComponentProps) {
  
  const { date, icon, caption, temperature} = props

  return (
    <article className="weather-card weather-card_small">
      <h3 className="weather-card__title">{ date }</h3>
      <img className="weather-card__img" src={ icon } alt={ caption } width="100" height="100" />
      <p className="weather-card__text">{ temperature }&#176;</p>
  </article>
  )
}

export default WeatherCard