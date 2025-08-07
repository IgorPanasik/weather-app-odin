import { requestAPIGifs } from './requestsToApi/requestAPIGifs.js';
import { hideSpinner } from './spinner/hideSpinner.js';
import { showSpinner } from './spinner/showSpinner.js';
import { updateWeather } from './updateWeather.js';
import { getCurrentCity } from './utils/stateForCity.js';

export const showWeatherWithLoadingGif = async () => {
    const userLocale = navigator.language || 'en';
    const city = getCurrentCity();
    try {
        const gif = await requestAPIGifs();
        showSpinner(gif);

        await Promise.all([
            updateWeather(city, userLocale),
            new Promise((res) => setTimeout(res, 2000)),
        ]);
    } catch (error) {
        console.error(error);
    } finally {
        hideSpinner();
    }
};
