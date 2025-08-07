import { DOM } from './dom/domElements.js';
import { htmlMarkup } from './htmlMarkup.js';

export const renderToday = (todayData, locale, city) => {
    const html = htmlMarkup(todayData, locale, city);
    const todayContainer = DOM.todayContainer;
    todayContainer.innerHTML = '';
    todayContainer.innerHTML = `
		${html}
	`;
};
