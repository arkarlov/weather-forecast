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

  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() - 1)
  const maxDate = getFormattedDate(currentDate)
  currentDate.setDate(currentDate.getDate() - 4)
  const minDate = getFormattedDate(currentDate)

  return (
    <input id={id} className="selector" type="date" name="date" min={ minDate } max={ maxDate } value={ date } onChange={ handleChange } required />
  )
}

function getFormattedDate (date: Date): string {
  return `${ date.getFullYear() }-${ (0 + `${ date.getMonth() + 1 }`).slice(-2) }-${ (0 + `${ date.getDate() }`).slice(-2) }`
}