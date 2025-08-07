import { renderForecast } from './renderForecast.js';
import { renderToday } from './renderToday.js';
import { requestAPIWeather } from './requestsToApi/requestAPIWeather.js';
import { changeBG } from './utils/changeBG.js';
import { enrichDay } from './utils/enrichDay.js';

export const updateWeather = async (city, locale) => {
    try {
        const daysRaw = await requestAPIWeather(city, locale);
        const days = daysRaw.map((day) => enrichDay(day, locale));
        const [today, ...forecast] = days;

        renderToday(today, locale, city);
        renderForecast(forecast, locale);
        changeBG(today);
    } catch (error) {
        console.error('Weather loading error:', error);
    }
};
