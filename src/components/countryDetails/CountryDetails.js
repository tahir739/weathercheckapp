import React from 'react';
import './CountryDetails.css';

const CountryDetail = ({ name, capital, population, countryflag, language, index }) => {

    return (
        <div>
            <p><label className='label'>Capital: </label>{capital}</p>
            <p><label className='label'>Population: </label>{population}</p>

            <div className='languages'>
                <label className='label'>Languages</label>
                <u1>
                    {language && language.length && language.map((element, index) => {
                        return <li key={index}>{element.name}</li>
                    })}
                </u1>
            </div>

            <div><img className='flag' src={countryflag} width={210} alt={'countryflag'} /></div>

        </div>

    )
}

export default CountryDetail;