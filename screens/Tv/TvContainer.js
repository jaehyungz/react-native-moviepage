import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    todayError: null,
    popular: [],
    popularError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    setShows({
      loading: false,
      today,
      todayError: null,
      popular,
      popularError: null,
      thisWeek,
      thisWeekError: null,
      topRated,
      topRatedError: null,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <TvPresenter {...shows} />;
};
