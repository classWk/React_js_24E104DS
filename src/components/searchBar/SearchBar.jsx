import React, { useState } from 'react'
import './searchBar.css'
const types = ["buy", "rent"]
function SearchBar() {
   const[query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })
    const switchType = (val) => {
        setQuery((prev)=>({...prev, type:val}))
    }
  return (
    <div className="searchBar">
    <div className="type">
        {types.map((type)=>(
            <button key={type}
            onClick={()=>switchType(type)}
            className={query.type === type?"active":""}>{type}</button>
        ))}
    </div>
    </div>
  )
}
export default SearchBar