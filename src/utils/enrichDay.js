export const enrichDay = (day, userLocale) => {
    const dateObj = new Date(day.datetime);

    return {
        ...day,
        dayName: dateObj.toLocaleDateString(userLocale, { weekday: 'long' }),
        formattedDate: dateObj.toLocaleDateString(userLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }),
    };
};
