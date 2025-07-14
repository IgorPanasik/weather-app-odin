export const requestAPIGiphy = async (stateWeather, limit = 1) => {
    const WEATHER_TAGS = {
        clear: ['sun', 'clear sky', 'sunny'],
        rain: ['rain', 'raindrop', 'umbrella'],
        snow: ['snow', 'snowflake', 'blizzard'],
        cloudy: ['cloud', 'overcast', 'grey sky'],
        thunder: ['thunder', 'storm', 'lightning'],
    };

    const raw = WEATHER_TAGS[stateWeather] ?? stateWeather;
    const tags = Array.isArray(raw) ? raw : [raw];
    const tagQuery = encodeURIComponent(tags.join(' OR '));
    const keyAPI = 'ps2sKjTvThillCLYQCuqeLMnnxfd8IxF';
    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${keyAPI}&q=${tagQuery}&limit=${limit}&lang=en`;

    const response = await fetch(urlAPI);
    if (!response.ok) {
        throw new Error(`HTTP-error! status is ${response.status}`);
    }

    const { data } = await response.json();
    console.log(data);
    return data.map((item) => ({
        url: item.images.original.url,
        alt: item.images.title || stateWeather,
    }));
};
