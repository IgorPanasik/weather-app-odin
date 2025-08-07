export const requestAPIGifs = async () => {
    const APIKEY = 'ps2sKjTvThillCLYQCuqeLMnnxfd8IxF';
    const URLGIFS = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=loading&limit=1`;

    try {
        const response = await fetch(URLGIFS);
        if (!response.ok)
            throw new Error(`HTTP-error! status is ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error while getting GIF', error);
        return 'LOADING...';
    }
};
