export const requestAPIWeather = async (location, locale) => {
    const API_KEY = '7RJDBFCGTLPBYZ3P3PPH8YTMK';
    const urlAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/?key=${API_KEY}&unitGroup=metric&lang=${locale}&iconSet=icons2`;

    const response = await fetch(urlAPI);
    if (!response.ok) {
        throw new Error(`HTTP-error! status is ${response.status}`);
    }

    const data = await response.json();
    return data.days;
};
