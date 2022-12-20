import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { AppContext } from '../services/Provider';
import Card from './Card';
import SearchBar from './SearchBar';

const Home = () => {
    
    const[dataApi, setDataApi] = useContext(AppContext);
    const[pageNumber, setPageNumber] = useState(0);
    
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        if (pageNumber === 0) {
            axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            setDataApi(response.data.results);
            console.log(dataApi)})
        }else{
            axios.get(url)
        .then(response => {
            setDataApi(response.data.results);
            console.log(dataApi)})
        }
    },[url])

    let next = () => {
        if(pageNumber === 0){
            return setPageNumber(1)
        }else{
            return setPageNumber(prevState => prevState + 1)
        }
    }

    let prev = () => {
        if(pageNumber === 1 || pageNumber === 0){
            return setPageNumber(1)
        }else{
            return setPageNumber(prevState => prevState - 1)
        }
    }

    return (
        <div>
            <div className='container-fluid mt-4'>
            <div className='mb-2'>
            <SearchBar url={url}></SearchBar>
            </div>
            <br></br>
            <button className='btn btn-light m-2' onClick={prev}>Preview</button>
            <button className='btn btn-primary m-2' onClick={next}>Next</button>
            </div>
            
            {/**La validacion ? - : para asegurarse que no llegue vacia la informacion en el map */}
            {dataApi != null ? dataApi.map((dato, i)  => <Card data={dato} key={i} />) : <h1>No funciona</h1>}
            <div className='container-fluid'>
            <button className='btn btn-light m-2' onClick={prev}>Preview</button>
            <button className='btn btn-primary m-2' onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Home;
