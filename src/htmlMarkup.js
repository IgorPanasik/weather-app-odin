import temp from './assets/images/weather-icons/temperature.svg';
import { DOM } from './dom/domElements.js';
import { convertDegrees } from './utils/convertDegrees.js';
import {
    localeDescribeEn,
    localeDescribeRu,
    weatherIcons,
} from './utils/localeDescribe.js';

export const htmlMarkup = (todayData, locale, city) => {
    const currentUnit = DOM.weatherToggle.textContent;

    const localeDescribe =
        locale === 'ru' ? localeDescribeRu : localeDescribeEn;

    const iconKey = todayData.icon;
    const weatherIcon = weatherIcons[iconKey] || temp;

    const newTemp = convertDegrees(todayData.temp);
    const newFeels = convertDegrees(todayData.feelslike);
    const newTempMax = convertDegrees(todayData.tempmax);
    const newTempMin = convertDegrees(todayData.tempmin);

    return `<div class="weather__card-img">
						<img src="${weatherIcon}" alt="${todayData.conditions}">
						<p>${city ? city : ''}</p>
					</div>
					<div class="weather__card-details">
						<p>${localeDescribe.day}: ${todayData.dayName}</p>
						<p>${todayData.formattedDate}</p>
						<p>${todayData.conditions}</p>
						<p>${todayData.description}.</p>
						<p>${localeDescribe.temp}: ${currentUnit === '°C' ? todayData.temp : newTemp.toFixed(1)} ${DOM.weatherToggle.textContent}</br>
						${localeDescribe.feels}: ${currentUnit === '°C' ? todayData.feelslike : newFeels.toFixed(1)} ${DOM.weatherToggle.textContent}</p>
						<p>${localeDescribe.tempmax}: ${currentUnit === '°C' ? todayData.tempmax : newTempMax.toFixed(1)} ${DOM.weatherToggle.textContent}<br/> 
						${localeDescribe.tempmin}: ${currentUnit === '°C' ? todayData.tempmin : newTempMin.toFixed(1)} ${DOM.weatherToggle.textContent}
						</p>
						<p>${localeDescribe.hum}: ${todayData.humidity}%</p>
						<p>${localeDescribe.wind}: ${todayData.windspeed}kph</p>
					</div>`;
};
