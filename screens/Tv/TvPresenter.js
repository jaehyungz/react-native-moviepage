import React from "react";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import ScrollContainer from "../../components/ScrollContainer";
import Slider from "../../components/Slider";
import Vertical from "../../components/Vertical";
import { Dimensions } from "react-native";
import Slide from "../../components/movies/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading}>
    <Container>
      <SliderContainer>
        <Slider>
          {thisWeek.map((show) => (
            <Slide
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              votes={show.vote_average}
              overview={show.overview}
              backgroundImage={show.backdrop_path}
            />
          ))}
        </Slider>
      </SliderContainer>
      <HorizontalSlider title={"Popular Shows"}>
        {popular.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title={"Top Rated"}>
        {topRated.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title={"Airing Today"}>
        {today.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
