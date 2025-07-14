import { htmlMarkup } from './htmlMarkup.js';
import { localeDescribeEn, localeDescribeRu } from './localeDescribe.js';

export const renderForecast = (daysArray, locale, gif) => {
    const forecastContainer = document.querySelector(
        '.weather__forecast-cards'
    );
    const fragment = document.createDocumentFragment();
    const labels = locale === 'ru' ? localeDescribeRu : localeDescribeEn;

    daysArray.forEach((day) => {
        const cardForecast = document.createElement('div');
        cardForecast.className = 'weather__card';
        cardForecast.innerHTML = `
					${htmlMarkup(day, gif, labels)}
		`;
        fragment.appendChild(cardForecast);
    });
    forecastContainer.innerHTML = '';
    forecastContainer.appendChild(fragment);
};
