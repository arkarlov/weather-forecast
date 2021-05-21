import { ForecastData } from './get-api-data'


export default function handleDailyResponse (dailyData: ForecastData) {
  const daily = dailyData.daily
  const dates = daily.map((day, index) => {return new Date(day.dt * 1000)})

  return daily.map((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString('ru-RU', {year: 'numeric', month: 'short', day: 'numeric'})
    const temperature = Math.round(day.temp.day - 273.15).toString()
    const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    const caption = day.weather[0].description

    return {date, temperature, icon, caption}
  })

}