import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
const Slider = ({ children }) => (
  <>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swiper>
  </>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
