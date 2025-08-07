import { DOM } from '../dom/domElements.js';

export const hideSpinner = () => {
    const spinner = DOM.spinner;
    const appMain = DOM.main;
    const footer = DOM.footer;

    spinner.innerHTML = '';
    spinner.style.background = 'transparent';
    spinner.style.zIndex = 0;
    spinner.style.display = 'none';
    appMain.hidden = false;
    footer.hidden = false;
};
