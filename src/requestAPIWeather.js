export const requestAPIWeather = async (location = 'minsk', locale) => {
    const API_KEY = '7RJDBFCGTLPBYZ3P3PPH8YTMK'
    const urlAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${API_KEY}&unitGroup=metric&lang=${locale}`

    const response = await fetch(urlAPI)
    if (!response.ok) {
        throw new Error(`HTTP-error! status is ${response.status}`)
    }

    const data = await response.json()
    return data.days
}
