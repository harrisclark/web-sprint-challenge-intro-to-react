// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';


const CharStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  margin-top: .5rem;
  border-radius: 5px;
  background-color: AntiqueWhite;

  p {
    margin: .2rem;
  }
  button {
    margin-bottom: .5rem;
  }
`

const Character = (props) => {
  const [details, setDetails] = useState(false);
  const up = '\u2191';
  const down = '\u2193'
  
  const changeDetails = () => {
    details ? setDetails(false) : setDetails(true)
  }

  return (
    <CharStyle>
      <h3>{props.char.name}</h3>
      {
        details &&
          <>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Weight: {props.char.mass}kg</p>
          </>
      }
      <button onClick={changeDetails}>{details ? up : down}</button>

    </CharStyle>
  )
}

export default Character;