import React, { fragment } from "react";

import Header from "../Header";
import Form from"../Form";
import Error from"../Error";
import Loader from"../Loader";
import Forecast from"../Forecast";

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () =>{
const [ isError, isLoading, forecast, submitRequest] = useForecast();
 const onSubmit = value =>{
    submitRequest(value);
 };


    return (
        <fragment>
            <Header/>
            {!forecast && (
            <div className={'${styles.box} position-relative'}>
                {/* Form start */}
                {!isLoading && <Form submitSearch = {onSubmit}/>}
                {/* Error */}
                {!isError && <Error message = {isError}/>}
                {/* Loader */}
                {isLoading && <Loader/>}
                
            </div>
            )}
            {/* Forecast */}
            {forecast && <Forecast forecast={forecast} />}

        </fragment>
    );
    };

    export default Page; 


