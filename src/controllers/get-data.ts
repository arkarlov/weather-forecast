const API_URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = '4e7170fdaf57f6c481ced0713409d77d'
const lat = '53.195873'
const lon = '50.100193'
const cnt = '7'


const searchUrl = new URL(API_URL);
searchUrl.searchParams.append('lat', lat);
searchUrl.searchParams.append('lon', lon);
searchUrl.searchParams.append('cnt', cnt);
searchUrl.searchParams.append('appid', API_KEY);


async function GetData () {
  const response = await fetch(searchUrl.toString())
  if (response.ok) {
    const json = await response.json();
    console.log(json)
  } else {
    console.log('Error fetch: ', searchUrl.toString())
  }

}

export default GetData