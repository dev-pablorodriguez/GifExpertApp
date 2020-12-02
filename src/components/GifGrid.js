import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // const [counter, setCounter] = useState(0);
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);


    //useEffect recibiendo como 2do parámetro un arreglo vacío solo ejecutará el callback una vez (cuando el componente se renderice).
    //Este hook, definido de esta forma, es el equivalente al método componentDidMount() de React basado en clases.
    //Si el arreglo (List) está definido, el callback solo se ejecutará cuando uno de estos valores cambie.

    // useEffect( () => {
    //     getGifs(category)
    //         // .then( imgs => setImages(imgs));
    //         .then( setImages );
    // }, [category])

    // const getGifs = async () => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=eRKpUdAF3sqZgI0EWEXx42odjckYG7Bv`;
    //     const res = await fetch(url);
    //     const { data } = await res.json();

    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages(gifs);


    // }

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash"><i>Loading...</i></p>}

            <div className="card-grid">

                { 
                    images.map( img => 
                                    <GifGridItem
                                        key={ img.id } 
                                        //img={ img } 
                                        { ...img }//Envía todas las propiedades del objeto de forma independiente como parámetro al componente
                                    /> )
                }
            </div>


                {/* <ol>
                    { images.map( ({ id, title }) => <li key={ id }>{ title }</li> ) }
                </ol> */}

                {/* <h4>{ counter }</h4> */}
                {/* <button onClick={ () => setCounter(counter + 1) }>Aumentar contador</button> */}
        </>
    )
}
