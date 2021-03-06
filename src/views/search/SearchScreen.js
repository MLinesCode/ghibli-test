import React, { useState } from 'react'
import IconLite from '../../components/iconlite/IconLite'
import ArrowLeft from '../../assets/icons/left-arrow.svg'
import LogoGhibli from '../../assets/logo.png'
import AvatarUser from '../../assets/avatar.png'
import Totoro from '../../assets/totoro.png'
import InputSuggest from '../../components/inputsuggest/InputSuggest'
import { getApiSuggestions } from '../../hooks/request'
import './searchscreen.css'

const SearchScreen = () => {

  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState("")

  const getSuggestions = async (word) => {
    if (word) {
        setLoading(true);
        let response = await getApiSuggestions(word);
        setOptions(response);
        setLoading(false);
    } else {
        setOptions([]);
    }
  };

  const getApiUrl = (url) => {
      window.open(url, '_blank');
  };

  return (
    <>
      <div className="movie__nav">
        <a href="/home">
          <IconLite iconSource={ ArrowLeft } />
        </a>
        <img src={ LogoGhibli } alt={ LogoGhibli } />
        <a href="/login">
          <IconLite iconSource={ AvatarUser } />
        </a>
      </div>
      <InputSuggest 
        autoComplete="on" 
        loading={ loading }
        options={ options }
        requests={ getSuggestions }
        onClickFunction={ getApiUrl }
        placeholder="Buscar una pelicula"
      />
      <div className="search__text">
        <h4>¿Despistado?</h4>
        <p>Te suguiero algo mágico</p>
      </div>
      <div className="search__image">
        <img src={ Totoro } loading="lazy" alt={ Totoro } />
      </div>
    </>
  )
}

export default SearchScreen
