export default async function getData (url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    console.log('Error fetch: ', response.statusText)
  }
  const data = await response.json();

  return data
}
