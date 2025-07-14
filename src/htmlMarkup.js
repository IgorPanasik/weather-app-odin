export const htmlMarkup = (todayData, gif, labels) => {
    return `<div class="weather__card-img">
						<img src=${gif?.url} alt="${gif?.alt}">
					</div>
					<div class="weather__card-details">
						<p>${labels.day}: ${todayData.dayName}</p>
						<p>${todayData.formattedDate}</p>
						<p>${todayData.conditions}</p>
						<p>${todayData.description}.</p>
						<p>${labels.temp}: ${todayData.temp}°C,</br>
						${labels.feels}: ${todayData.feelslike}°C</p>
						<p>${labels.hum}: ${todayData.humidity}</p>
						<p>${labels.wind}: ${todayData.windspeed}</p>
					</div>`;
};
