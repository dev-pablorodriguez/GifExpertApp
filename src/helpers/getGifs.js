
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=eRKpUdAF3sqZgI0EWEXx42odjckYG7Bv`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    // setimages(gifs);
    //Al implementar la función en un archivo externo, se retornan los gifs ya que no tengo acceso a setImages.
    //Al ser una función async, me retorna una promesa que, al resolverse (then), me retorna los gifs
    return gifs;

}