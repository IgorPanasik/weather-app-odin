import { DOM } from './dom/domElements.js';
import { formSearchCity } from './formSearchCity.js';
import { showWeatherWithLoadingGif } from './showWeatherWithLoadingGif.js';
import './styles.css';
import { updateWeather } from './updateWeather.js';
import { localeDescribeEn, localeDescribeRu } from './utils/localeDescribe.js';
import { getCurrentCity } from './utils/stateForCity.js';
const initApp = () => {
    const form = DOM.form;
    const userLocale = navigator.language || 'en';

    DOM.inputLabel.textContent =
        userLocale === 'ru'
            ? localeDescribeRu.searchCity
            : localeDescribeEn.searchCity;
    DOM.searchBtn.textContent =
        userLocale === 'ru'
            ? localeDescribeRu.searchBtn
            : localeDescribeEn.searchBtn;
    showWeatherWithLoadingGif();

    form.addEventListener('submit', formSearchCity);

    DOM.weatherToggle.addEventListener('click', async (e) => {
        const btnText = e.currentTarget;
        btnText.textContent = btnText.textContent === '°C' ? '°F' : '°C';
        const city = getCurrentCity();
        await updateWeather(city, userLocale);
    });
    showWeatherWithLoadingGif();
    updateWeather(getCurrentCity(), userLocale);
};
document.addEventListener('DOMContentLoaded', initApp);
