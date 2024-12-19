import React, { createContext, useContext, useEffect, useState } from 'react';

export const ApiData = createContext();

export const DataProvider = ({ children }) => {
    let base_url = 'https://restaurant.azeetechnology.com/api/public/restaurant/30'
    // let base_url = 'http://192.168.0.109:8000/api/public/restaurant/30'
    
    let img_url = 'https://restaurant.azeetechnology.com'
    const [data, setData] = useState([])
    
    const getApi = async () => {
        const response = await fetch(base_url)
        const data = await response.json()
        setData(data?.record)
    }

    useEffect(() => {
        getApi()
    }, [])
    return (
        <ApiData.Provider value={{  data,img_url }} >
            {children}
        </ApiData.Provider >
    );
};

export const useApiData = () => useContext(ApiData);

