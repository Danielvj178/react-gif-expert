import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGif = async () => {
        const response = await getGifs(category);
        setImages(response);
        setIsLoading(false);
    }

    useEffect(() => {
        getGif();
    }, []);

    return {
        images,
        isLoading
    }
}
