import React from 'react'
import './filter.css'
function Filter() {
  return (
    <div className="filter">
      <h1>Search results for <b>Pune</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Pune</label>
          <input 
          type="text"
          id='city'
          name='city'
          placeholder='City Loaction'
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input 
          type="number" 
          id='minPrice'
          name='minPrice'
          placeholder='any'
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input 
          type="text" 
          id='maxPrice'
          name='maxPrice'
          placeholder='any'
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input 
          type="text"
          id='bedroom'
          name='bedroom'
          placeholder='any'
          />
        </div>
        <button>
          <img src="/public/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}
export default Filter