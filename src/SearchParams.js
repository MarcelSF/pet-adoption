import { useState } from 'react';

const SearchParams = () => {
  // const location = "Munich, Bayern, Germany";
  const [location, setLocation] = useState("");


  // DO NOT HAVE CONDITIONAL HOOKS!
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="location"
          onChange={(e) => setLocation(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
