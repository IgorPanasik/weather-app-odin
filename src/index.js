import './styles.css';
import { updateWeather } from './updateWather.js';
const initApp = async () => {
    const form = document.querySelector('form');
    const userLocale = navigator.language || 'en';
    updateWeather('minsk', userLocale);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input').value.trim();
        const city = input || 'minsk';
        form.reset();
        updateWeather(city, userLocale);
    });
};

initApp();
