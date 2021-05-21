import React, { useState } from 'react'
import './selectors.css'


type CityProps = {
  id: string,
  cities: string[],
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function CitySelector(props: CityProps) {

  const { id, cities, handleSelect } = props
  const [city, setCity] = useState("default");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value)
    handleSelect(event)
  }

  return (
    <select id={id} className="selector" name="city" value={city} onChange={ handleChange }>
      <option value="default" disabled hidden>Select city</option>
      {
        cities.map((city) => (
          <option key={city} className="selector__city-option" value={city}>{ city }</option>
        ))
      }
    </select>
  )
}


type DateProps = {
  id: string,
  handleSelect: (inputDateValue: string) => void
}

export function DateSelector(props: DateProps) {

  const {id, handleSelect} = props

  const [date, setDate] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
    handleSelect(event.target.value)
  }

  return (
    <input id={id} className="selector" type="date" name="date" value={ date } onChange={ handleChange } />
  )

}
