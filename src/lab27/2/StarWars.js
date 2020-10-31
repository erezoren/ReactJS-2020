import React, {useEffect, useState} from 'react'
import $ from "jquery";

export const StarWars = ({id}) => {
  const lableeStyle = {fontWeight: 'bold'};

  const [film, setFilm] = useState(null);
  const [filmId, setFilmId] = useState(id);

  useEffect(function () {
    const xhr = $.getJSON(`https://swapi.dev/api/films/${filmId}/`,
        function success(data) {
          setFilm(data);
        });

    return function cancel() {
      setFilm({filmId});
      xhr.abort();
    }
  }, [filmId]);

  const ShowFilmInfo = ({film}) => {
    return <>
      <p>
        <label style={lableeStyle}>Title:</label> {film.title}
      </p>
      <p>
        <label style={lableeStyle}>Opening Crawl:</label>{film.opening_crawl}
      </p>
    </>
  }

  return (
      <div>
        <div>
          <input type={'text'} onChange={(e) => setFilmId(e.target.value)}/>
        </div>
        {film ? <ShowFilmInfo film={film}/> : 'Loading......'}
      </div>
  )
}