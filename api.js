import axios from "axios";

const API_KEY = "7cd10fd231810360831f70835cbaf84c";

const makeRequeset = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data, //results 가 없는경우에 data전체를 return하기 위함. detail page
    } = await makeRequeset(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie"),
};
export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  popular: () => getAnything("/tv/popular"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (
  path,
  defaultPoster = "https://images.unsplash.com/photo-1596687530420-4214d0e2ff0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
