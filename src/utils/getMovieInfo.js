import axios from "axios";

export async function getMovieInfo(movieID) {
  let options = {
    method: "GET",
    url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
    params: { id: movieID },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
    },
  };

  const { data } = await axios(options);

  //   console.log(data);

  return data;
}
