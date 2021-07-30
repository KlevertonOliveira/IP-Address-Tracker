import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GeolocationDataType } from '../Utils/IGeolocationData';

type AppContextData = {
  query: string | undefined;
  setQuery: (query:string) => void;
  queryGeolocationData: GeolocationDataType;
}

type AppContextProviderProps = {
  children: ReactNode;
}

export const AppContext = React.createContext({} as AppContextData);

const isIp = require('is-ip');

export const AppContextProvider = ({children}:AppContextProviderProps) => {

  const [query, setQuery] = useState<string>();
  const [queryGeolocationData, setQueryGeolocationData] = useState(
  {
    ip:'-', 
    location:{
      city:'-', 
      country:'-'
    },
    coordinates:{
      latitude:0, 
      longitude:0
    },
    postalCode:'-', 
    timezone:'-', 
    isp:'-'
  } as GeolocationDataType);

  const fetchQueryGeolocationData = async(query:string, queryType:string) =>{
    
    try{

      const API_SECRET = process.env.REACT_APP_API_SECRET;

      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_SECRET}&${queryType}=${query}`)

      const data = await response.json();
      console.log(data);
      
      const {ip, location:{country, city, lat, lng, postalCode, timezone}, isp} = data;

      const newGeoLocationData:GeolocationDataType = {
        ip, 
        location:{
          city, 
          country
        },
        coordinates:{
          latitude: lat,
          longitude: lng,
        },
        postalCode, 
        timezone, 
        isp
      }

      setQueryGeolocationData(newGeoLocationData);

    }catch(error){
      console.log(error); 
    }
  }    

  useEffect(()=>{
    if(query){
      const queryType = isIp(query) ? 'ipAddress' : 'domain'; 
      fetchQueryGeolocationData(query, queryType);
    }
  }, [query])

  return(
    <AppContext.Provider
      value={{
        query,
        setQuery,
        queryGeolocationData,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}