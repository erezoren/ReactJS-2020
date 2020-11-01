import React, {useEffect, useState} from 'react'
import $ from "jquery";
import {Film} from "./Films";

export const StarWarsCharacter = ({cid}) => {
  const lableStyle = {fontWeight: 'bold'};

  const [character, setCharacter] = useState(null);
  const [id, setId] = useState(cid);

  useEffect(function () {
    const xhr = $.getJSON(`https://swapi.dev/api/people/${id}/`,
        function success(data) {
          setCharacter(data);
        });

    return function cancel() {
      setCharacter({id});
      xhr.abort();
    }
  }, [id]);

  const ShowCharacterInfo = ({character}) => {

    return <>
      <p>
        <label style={lableStyle}>name:</label> {character.name}
      </p>
      <p>
        <label style={lableStyle}>Hair Color:</label>{character.hair_color}
      </p>
      <p>
        <label style={lableStyle}><u>Films:</u></label>
        {
          character.films &&  ShowFilms(character.films)
        }
      </p>
    </>
  }

  const ShowFilms = (films) => {
    return films.map(film => <Film furl={film}/>)
  }

  return (
      <div>
        <div>
          <input type={'text'} value={cid}
                 onChange={(e) => setId(e.target.value)}/>
        </div>
        {character ? <ShowCharacterInfo character={character}/>
            : 'Loading......'}
      </div>
  )
}