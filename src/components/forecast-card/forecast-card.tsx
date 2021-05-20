import React, { FunctionComponent, ReactNode } from 'react'
import { CitySelector, DateSelector } from '../selectors/selectors'
import './forecast-card.css'

type ComponentProps = {
  cardTitle: string,
  citySelector: JSX.Element,
  dateSelector?: JSX.Element,
  content: JSX.Element
}

function ForecastCard (props: ComponentProps) {

  const { cardTitle, citySelector, dateSelector, content } = props

  return (
    <section className="forecast-card">
      <h2 className="forecast-card__title">{ cardTitle }</h2>
      <div className="forecast-card__selectors">
        { citySelector }
        { dateSelector || ''}
      </div>

      <section className="forecast-card__content">
        { content } 
      </section>
    </section>
  )
}

export default ForecastCard
