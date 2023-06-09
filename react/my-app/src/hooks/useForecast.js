import React, {useState} from 'react'
import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForcast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading]= useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoied = async location => {
    const {data} = await axios (`${REQUEST_URL}/serach`, {params: {query:location}});

    if (!data || data.length === 0){
      setError('There is no such location in the world');
      setLoading(false);
      return;
    }
    return data [0];
  };

  const getForecastData = async woeid => {
    const {data} = await axios (`${REQUEST_URL}/${woeid}`);

    if (!data || data.length ===0){
      setError('Something is Wrong');
      setLoading(fasle);
      return;
    }

    return data;
  };

  const gatherForecastData = data => {
    const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
    const currentDayDetaiils =
    getCurrentDayDetailedForecast(data.consolidated_weather[0]);
    const upcomingDays = getUpcomingDaysForecast (data.consolidated_weather);

    setForecast({ currentDay, currentDayDetails, upcomingDays});
    setLoading(fasle);
  };

  const submitRequest = async location => {
    setLoading(true);
    setError(fasle);

    const response = await getWoied(loactaion);
    if (!response?.woeid) return;

    const data = await getForecastData(response.woied);
    if(!data) return;

    gatherForecastData(data);
  };
  return (
    isError,
    isLoading,
    forecast,
    submitRequest,
  )
}

export default useForcast
