import React from "react";
import Input from "../../components/search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    searchStyle={{
      paddingTop: 10,
    }}
  >
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />

    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}

    {shows.length !== 0 && (
      <HorizontalSlider title={"TV results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
