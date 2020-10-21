import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import {
  InputText, InputSubmit, Form, Toggle,
} from './styles';

const Search = ({ showSearch, setShowSearch }) => {
  const [movie, setMovie] = useState('');

  const Router = useRouter();

  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (movie.trim() === '' || movie.trim().length < 3) return;

    // reset input
    setMovie('');

    Router.push(`/list-movies/${movie}`);
  };

  return (
    <>
      <Form
        display={showSearch.toString()}
        onSubmit={handleSubmit}
      >
        <InputText
          type="text"
          name="movie"
          value={movie}
          placeholder="Película, serie, programa..."
          onChange={handleChange}
        />
        <InputSubmit type="submit" />
      </Form>
      {showSearch && (
      <Toggle
        onClick={() => setShowSearch(!showSearch)}
      >
        x
      </Toggle>
      )}
    </>
  );
};

Search.propTypes = {
  showSearch: PropTypes.bool.isRequired,
  setShowSearch: PropTypes.func.isRequired,
};

export default Search;
