// == Import npm
import React, { useEffect, useRef } from 'react';

const SearchBox = ({ map, maps, placeholder }) => {
  const input = useRef(null);

  const request = {
    query: "Nice parking",
    fields: ["name", "geometry"],
  };

  const callback = (results, status) => {
    console.log(results);
  };

  useEffect(() => {
    const searchResult = new maps.places.PlacesService(map);
    searchResult.textSearch(request, callback);
  }, []);

  return <input ref={input} placeholder={placeholder} type="text" />;
};

export default SearchBox;
