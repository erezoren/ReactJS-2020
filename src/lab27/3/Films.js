import React, {useEffect, useState} from 'react'
import $ from "jquery";

export const Film = ({furl}) => {
  const lableStyle = {fontWeight: 'bold'};

  const [film, setFilm] = useState(null);

  useEffect(function () {
    const xhr = $.getJSON(furl,
        function success(data) {
          setFilm(data);
        });

    return function cancel() {
      setFilm({furl});
      xhr.abort();
    }
  }, [furl]);

  const ShowFilmInfo = ({film}) => {
    return <>
      <p>
        <label style={lableStyle}>Title:</label> {film.title}
      </p>
      <p>
        <label style={lableStyle}>Opening Crawl:</label>{film.opening_crawl}
      </p>
    </>
  }

  return (
      <div>
        {film ? <ShowFilmInfo film={film}/> : 'Loading......'}
      </div>
  )
}