import cloudy from '../assets/images/weather-icons/cloud.svg';
import fog from '../assets/images/weather-icons/fog.svg';
import rain from '../assets/images/weather-icons/rain.svg';
import snow from '../assets/images/weather-icons/snowing.svg';
import thunder from '../assets/images/weather-icons/storm.svg';
import clear from '../assets/images/weather-icons/sun.svg';
import wind from '../assets/images/weather-icons/wind.svg';
import clearVideo from '../assets/videos/clear.mp4';
import cloudyVideo from '../assets/videos/cloudy.mp4';
import fogVideo from '../assets/videos/fog.mp4';
import rainVideo from '../assets/videos/rain.mp4';
import snowVideo from '../assets/videos/snow.mp4';
import thunderVideo from '../assets/videos/thunder.mp4';
import windVideo from '../assets/videos/wind.mp4';

export const localeDescribeRu = {
    searchCity: 'Введите город',
    searchBtn: 'Поиск',
    day: 'День',
    temp: 'Температура',
    tempmax: 'Максимальная',
    tempmin: 'Минимальная',
    feels: 'Ощущается как',
    hum: 'Влажность',
    wind: 'Скорость ветра',
};

export const localeDescribeEn = {
    searchCity: 'Type city',
    searchBtn: 'Search',
    day: 'Day',
    temp: 'Temp',
    tempmax: 'Max',
    tempmin: 'Min',
    feels: 'Feels like',
    hum: 'Humidity',
    wind: 'Wind speed',
};

export const weatherIcons = {
    snow: snow,
    'snow-showers-day': snow,
    'snow-showers-night': snow,
    'thunder-rain': thunder,
    'thunder-showers-day': thunder,
    'thunder-showers-night': thunder,
    rain: rain,
    'showers-day': rain,
    'showers-night': rain,
    fog: fog,
    wind: wind,
    cloudy: cloudy,
    'partly-cloudy-day': cloudy,
    'partly-cloudy-night': cloudy,
    'clear-day': clear,
    'clear-night': clear,
    clear: clear,
};

export const weatherBGVideo = {
    snow: snowVideo,
    'snow-showers-day': snowVideo,
    'snow-showers-night': snowVideo,
    'thunder-rain': thunderVideo,
    'thunder-showers-day': thunderVideo,
    'thunder-showers-night': thunderVideo,
    rain: rainVideo,
    'showers-day': rainVideo,
    'showers-night': rainVideo,
    fog: fogVideo,
    wind: windVideo,
    cloudy: cloudyVideo,
    'partly-cloudy-day': cloudyVideo,
    'partly-cloudy-night': cloudyVideo,
    'clear-day': clearVideo,
    'clear-night': clearVideo,
    clear: clearVideo,
};
