import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { ScrollView, View } from "react-native";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      contentContainerStyle={{ padding: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20, marginBottom: 40 }}
    >
      {children}
      {/* horizontal 으로 scrollview의 가로정렬이 가능하다.*/}
      {/* showsHorizontalScrollIndicator 으로 가로스크롤 스크롤바를 안보여줄수있다 boolean */}
    </ScrollView>
  </View>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
