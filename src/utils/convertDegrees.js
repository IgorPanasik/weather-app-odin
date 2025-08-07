import { DOM } from '../dom/domElements.js';

export const convertDegrees = (temp) => {
    const unit = DOM.weatherToggle.textContent;

    return unit === '°F' ? temp * (9 / 5) + 32 : ((temp - 32) * 5) / 9;
};
