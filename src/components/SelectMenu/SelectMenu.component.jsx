import React, { useState } from 'react'
import './SelectMenu.styles.scss'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SelectMenu = ({setSelection}) => {
    // const [search, setSearch] = useState('')

    const handleChange = (event) => {      
      setSelection(event.target.value)
            
    }
   
  return (
    <div>
      <div className="book-selector">
        <h1>Find Your Next Book</h1>
        <form className="genre-form">
          <div>            
            <label className="genre-label">Choose a Genre</label>
            <select className="selections" onChange={handleChange}>
              <option>Select One</option>
              <option value="mystery">
                Mystery
              </option>
              
              <option value="science_fiction">Science Fiction</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectMenu