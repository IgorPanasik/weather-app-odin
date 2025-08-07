import { DOM } from './dom/domElements.js';
import { htmlMarkup } from './htmlMarkup.js';

export const renderForecast = (daysArray, locale) => {
    const forecastContainer = DOM.forecastContainer;
    const fragment = document.createDocumentFragment();

    daysArray.forEach((day) => {
        const cardForecast = document.createElement('div');
        cardForecast.className = 'weather__card';
        cardForecast.innerHTML = `
					${htmlMarkup(day, locale)}
		`;
        fragment.appendChild(cardForecast);
    });
    forecastContainer.innerHTML = '';
    forecastContainer.appendChild(fragment);
};
