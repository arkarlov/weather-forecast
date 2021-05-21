const API_BASE_URL = 'https://api.openweathermap.org'
const API_KEY = '4e7170fdaf57f6c481ced0713409d77d'


export default function getUrl (lat: number, lon: number, dt?: string): string {
  
  const urlString = `/data/2.5/onecall${dt ? `/timemachine`: ``}`
  const url = new URL(urlString, API_BASE_URL);

  url.searchParams.append('lat', lat.toString());
  url.searchParams.append('lon', lon.toString());
  if (dt) {
    url.searchParams.append('dt', dt)
  } else {
    url.searchParams.append('exclude', 'minutely,hourly,alerts')
  }
  url.searchParams.append('appid', API_KEY)

  return url.toString()
}
