import React from "react";
import styled from "styled-components/native";
import Input from "../../components/search/Input";

const Container = styled.ScrollView`
  background-color: black;
`;
const Text = styled.Text``;

export default ({ placeholder, value, onChange, onSubmit }) => (
  <Container>
    <Input
      placeholder={"Write a keyword"}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </Container>
);
