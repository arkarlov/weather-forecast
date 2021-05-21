import { ForecastData } from './get-api-data'


export function handleDailyResponse (dailyData: ForecastData) {
  const daily = dailyData.daily

  return daily.map((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})
    const temperature = Math.round(day.temp.day - 273.15).toString()
    const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    const caption = day.weather[0].description

    return {date, temperature, icon, caption}
  })
}

export function handlePastResponse (PastData: ForecastData) {
  const current = PastData.current

  const date = new Date(current.dt * 1000).toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})
  const temperature = Math.round(current.temp - 273.15).toString()
  const icon = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
  const caption = current.weather[0].description

  return {date, temperature, icon, caption}

}