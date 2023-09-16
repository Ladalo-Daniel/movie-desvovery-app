import axios from 'axios';

//https://api.themoviedb.org/3/movie/top_rated

const TMDB_API_KEY = 'b82c3704c3dbf1f892598efb74d6b3cf';
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=5`

export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(
     url
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
