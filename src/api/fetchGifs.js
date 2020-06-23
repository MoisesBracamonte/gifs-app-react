
export const fetchGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=s9cgu35D9q6O0a0tuUSx9bNW5oRcFZUt&q=${ encodeURI(category) }&limit=${5}`;
        const response = await fetch(url);
        const respJson = await response.json();
        const { data } = respJson;
        const gifs = data.map( x =>  {  
            return {
                id : x.id,
                title: x.title,
                img : x.images?.downsized_medium.url
            }
        }) 
        return gifs
}