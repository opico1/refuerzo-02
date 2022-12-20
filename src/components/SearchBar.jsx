import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { AppContext } from '../services/Provider';

const SearchBar = ({url}) => {

    const inputEspecie = useRef(null);
    const inputEstatus = useRef(null);
    const [dataApi, setDataApi] = useContext(AppContext);

    const search = async() => {

        const especieValue = inputEspecie.current.value;
        const estatusValue = inputEstatus.current.value;

        await axios.get(url)
            .then(response => {

                const characterBySpecie = response.data.results.filter((e) => e.species === especieValue)
                const characterByStatus = response.data.results.filter((e) => e.status === estatusValue)

                if (characterBySpecie.length !== 0) {
                    setDataApi(characterBySpecie)
                }

                if (characterByStatus.length !== 0) {
                    setDataApi(characterByStatus)
                }

                if (characterByStatus.length === 0 && characterBySpecie.length === 0) {
                    setDataApi(response.data.results)
                }
            })

    }

    return (
        <div className='container'>
            <label className='form-label'>Filtrar por especie</label>
            <input className='form-control' ref={inputEspecie} type='text' placeholder='Ingrese una especie'></input>
            <br/>
            <label className='form-label'>Filtrar por estado de vida</label>
            <input className='form-control' ref={inputEstatus} type='text' placeholder='Ingrese un estado de vida'></input>
            <button className='btn btn-primary' onClick={() => search()}>Buscar</button>
        </div>
    );
}

export default SearchBar;
