import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Se debe modificar el estado a través de useState. Para esto puede utilizarse this.state o hook useState
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     //Forma #1 de añadir elementos al arreglo
    //     setCategories([...categories, 'HunterXHunter']);

    //     //Forma #2 de añadir elementos al arreglo
    //     //setCategories (callback de useState) también recibe un callback como parámetro
    //     //este callback recibe como parámetro el state actual
    //     setCategories( categorias => [...categorias, 'Slam Dunk']);//categorias es el state actual pasado como parámetro
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {/* {categories.map(category => <li key={ category }>{ category }</li>)} */}

                {
                    categories.map(c => 
                        // <li key={ c }>{ c }</li>
                        <GifGrid 
                            key={ c }
                            category={ c } 
                        />
                    )
                }

            </ol>
        </>
    )
}

export default GifExpertApp
//con el default export, al momento de importarlo se le puede dar el nombre que yo desee a la importación

//si no se define un default export y se decide exportar únicamente la función (componente), se utilizará la
//desestructuración de objetos en la importación para obtener la función deseada