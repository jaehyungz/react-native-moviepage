import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";
export default () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
  }); //default  연속 렌더링 방지를 위함.

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying: nowPlaying,
      nowPlayingError: nowPlayingError,
      popular: popular,
      popularError: popularError,
      upcoming: upcoming,
      upcomingError: upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <MoviesPresenter refreshFn={getData} {...movies} />;
};
