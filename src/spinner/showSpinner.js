import { DOM } from '../dom/domElements.js';

export const showSpinner = (gif) => {
    const spinner = DOM.spinner;
    const appMain = DOM.main;
    const footer = DOM.footer;

    if (typeof gif === 'string') {
        spinner.textContent = gif;
    } else {
        spinner.innerHTML = `<img src="${gif.images.original.url}" alt="${gif.title}">`;
    }

    spinner.style.background = 'rgba(2, 2, 2, 0.8)';
    spinner.style.zIndex = '9999';
    spinner.style.display = 'flex';
    appMain.hidden = true;
    footer.hidden = true;
};
