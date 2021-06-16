type WeatherForecastData =  {
  description: string,
  icon: string,
}
type CurrentForecastData = {
    dt: number,
    temp: number,
    weather: Array<WeatherForecastData>
}

type DailyForecastData = {
  dt: number,
  temp: {
    day: number
  },
  weather: Array<WeatherForecastData>
}

export interface ForecastData {
  current: CurrentForecastData,
  daily: Array<DailyForecastData>
}

export default async function getData (url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    console.log('Error fetch: ', response.statusText)
  }
  const data: ForecastData = await response.json();

  return data
}
