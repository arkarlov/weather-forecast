import React, { useState } from 'react'
import './selectors.css'

type CityProps = {
  cities: string[]
}

export function CitySelector(props: CityProps) {

  const { cities } = props
  const [city, setCity] = useState("default");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value)
    console.log(event.target)
  }

  return (
    <select className="selector" name="city" value={city} onChange={ handleChange }>
      <option value="default" disabled hidden>Select city</option>
      {
        cities.map((city) => (
          <option key={city} className="selector__city-option" value={city}>{ city }</option>
        ))
      }
    </select>
  )
}


export function DateSelector() {

  const [date, setDate] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  return (
    <input className="selector" type="date" name="date" id="date" value={ date } onChange={ handleChange } />
  )

}
