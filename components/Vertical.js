import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Votes from "./Votes";
import Poster from "./Poster";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";
import { useNavigation } from "@react-navigation/native";
const Container = styled.View`
  align-items: center;
  margin: 0 10px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px;
`;

const Vertical = ({ id, poster, title, votes, overview }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { id, title, poster, votes, overview });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 15)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
