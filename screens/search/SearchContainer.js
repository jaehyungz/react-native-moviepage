import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    loading: true,
    movies: [],
    shows: [],
    movieError: null,
    showsError: null,
  });
  const onChange = (text) => {
    setKeyword(text);
  };
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);

    setResults({
      loading: false,
      movies,
      shows,
      movieError,
      showsError,
    });
  };
  console.log(results);
  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
      {...results}
    />
  );
};
