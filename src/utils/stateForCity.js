let currentCity = 'Minsk';

export const getCurrentCity = () => currentCity;
export const setCurrentCity = (city) => {
    currentCity = city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase();
};
