import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { trimText, formatDate } from "../utils";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  padding: 0 20px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
`;
const RelaseDate = styled.Text`
  color: #fff;
  font-size: 12px;
`;
const Overview = styled.Text`
  margin-top: 10px;
  color: #fff;
`;

const Horizontal = ({ id, title, poster, overview, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        {releaseDate ? (
          <RelaseDate>{formatDate(releaseDate)}</RelaseDate>
        ) : null}

        <Overview>{trimText(overview, 130)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
