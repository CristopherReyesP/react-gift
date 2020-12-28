import React/* , { useEffect, useState }  */from 'react';
import { useFetchtGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {
   const { data:images, loading } = useFetchtGifs( category );
   console.log(loading);

    

    return (
        <>
        <h3>{category}</h3>
        { loading && <p className='card animate__animated animate__flash'>Loading</p> }
        
        <div className='card-grid'>
            
                {
                    images.map( img => (
                        <GifGridItem 
                        
                        key= { img.id }
                        { ...img }
                        />  
                    ))
                }
           
        </div>
        </> 
    )
}
