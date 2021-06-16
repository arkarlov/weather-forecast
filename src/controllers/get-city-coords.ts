import { CITIES } from '../global'

export default function getCityCoords (cityName: string) {
  const city = CITIES.find((city) => city.name === cityName)
  if (!city) throw new Error('unknown city')
  const coords = {
    lat: city.lat,
    lon: city.lon
  }
  return coords
}