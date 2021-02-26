import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Slide from "../../components/movies/Slide";

import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slider from "../../components/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View`
  padding: 0 10px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Slider>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Slider>
        {/* controlsEnabled 슬라이더 버튼 boolean */}
        {/* loop  자동적으로 슬라이드이동 boolean*/}
        {/* timeout loop사용시 초단위로 단위 설정가능 */}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            ></Vertical>
          ))}
        </HorizontalSlider>
        <List title="Coming Soon">
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
