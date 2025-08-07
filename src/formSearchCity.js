import { DOM } from './dom/domElements.js';
import { requestAPIGifs } from './requestsToApi/requestAPIGifs.js';
import { hideSpinner } from './spinner/hideSpinner.js';
import { showSpinner } from './spinner/showSpinner.js';
import { updateWeather } from './updateWeather.js';
import { setCurrentCity } from './utils/stateForCity.js';

export const formSearchCity = async (e) => {
    e.preventDefault();
    const userLocale = navigator.language || 'en';
    const input = DOM.input.value.trim();
    const city = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();

    setCurrentCity(city);
    e.target.reset();

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
