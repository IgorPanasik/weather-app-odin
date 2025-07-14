import { requestAPIGiphy } from './requestAPIGiphy.js';

export const fetchGifsForDays = async (days) => {
    const promises = days.map((day) => {
        return requestAPIGiphy(day.conditions, 1)
            .then((arr) => arr[0] || { url: '', alt: '' })
            .catch((err) => {
                console.warn('Giphy failed for', day.conditions, err);
                return { url: '', alt: '' };
            });
    });

    return Promise.all(promises);
};
