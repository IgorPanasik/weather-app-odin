import { enrichDay } from './enrichDay.js';
import { fetchGifsForDays } from './fetchGifsForDays.js';
import { renderForecast } from './renderForecast.js';
import { renderToday } from './renderToday.js';
import { requestAPIWeather } from './requestAPIWeather.js';

export const updateWeather = async (city, locale) => {
    try {
        const daysRaw = await requestAPIWeather(city, locale);
        const days = daysRaw.map((day) => enrichDay(day, locale));
        const [today, ...forecast] = days;

        const allGifs = await fetchGifsForDays(days);
        const [gifToday, ...gifsForecast] = allGifs;
        renderToday(today, locale, gifToday);
        renderForecast(forecast, locale, gifsForecast);
    } catch (error) {
        console.error('Ошибка загрузки погоды:', error);
    }
};
