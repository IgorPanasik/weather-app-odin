import { htmlMarkup } from './htmlMarkup.js';
import { localeDescribeEn, localeDescribeRu } from './localeDescribe.js';

export const renderToday = (todayData, locale, gif) => {
    const labels = locale === 'ru' ? localeDescribeRu : localeDescribeEn;
    const html = htmlMarkup(todayData, gif, labels);
    const todayContainer = document.querySelector('.weather__card-today');
    todayContainer.innerHTML = '';
    todayContainer.innerHTML = `
		${html}
	`;
};
