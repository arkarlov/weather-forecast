import React, { Children } from 'react'
import './forecast-card.css'

type ComponentProps = {
  cardTitle: string,
  citySelector: JSX.Element,
  dateSelector?: JSX.Element,
  children: React.ReactNode
}

function ForecastCard (props: ComponentProps) {

  const { cardTitle, citySelector, dateSelector, children } = props

  return (
    <section className="forecast-card">
      <h2 className="forecast-card__title">{ cardTitle }</h2>
      <div className="forecast-card__selectors">
        { citySelector }
        { dateSelector || ''}
      </div>

      <section className="forecast-card__content">
        { children } 
      </section>
    </section>
  )
}

export default ForecastCard
