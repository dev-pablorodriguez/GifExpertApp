// Custom Hooks
// Forma de extraer lógica de algún componente o lógica de nuestra aplicación para que sea fácilmente reutilizable

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    //Los efectos esperan algo síncrono, por lo que no pueden ser async
    useEffect( () => {
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1, 2, 3, 4, 5, 6, 7],
    //         loading: false
    //     });
    // }, 3000);

    return state;// {data: [], loading: true};

}