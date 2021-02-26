import React from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";
const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: loading ? 1 : "auto",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" /> // ActivityIndicator 로딩이될때에 시계방향으로 돌아가는 애니메이션객체
    ) : (
      children
    )}
  </ScrollView>
);
ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
