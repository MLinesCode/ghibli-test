import React, { useState } from 'react'
import './inputsuggest.css'

const InputSuggest = ({
  loading,
  options,
  requests,
  placeholder,
}) => {

  const [inputValue, setInputValue] = useState('');

  const updateValue = (newValue) => {
      setInputValue(newValue);
      requests(newValue);
  };

  return (
    <div>
      <div className="search__input">
        <input
            className="input__container"
            value={ inputValue }
            onChange={(input) => updateValue(input.target.value)}
            placeholder={ placeholder } 
        />
        <div className="search__suggest">
          <ul className="search__ul">
            {loading && <ul className="search__loading">Loading...</ul>}
            {options?.entries?.length > 0 &&
              !loading &&
              options?.entries?.map((value, index) => (
                <li key={`${value.API}-${index}`}>{value.API}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InputSuggest
