import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charData, setCharData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setCharData(res.data);
      setSearchData(charData);
    })
    .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const searchResults = charData.filter(char => noSpaceToLower(char.name).includes(noSpaceToLower(searchTerm)));
    searchTerm ? setSearchData(searchResults) : setSearchData(charData);
  }, [searchTerm, charData])

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const noSpaceToLower = (string) => {
    return string.split('').filter(l => l.trim()).join('').toLowerCase();
  } 

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <input placeholder='Search...' type='text' value={searchTerm} onChange={handleChange} />
      {searchData.map((char, i) => <Character key={i} char={char} /> )}
    </div>
  );
}

export default App;
