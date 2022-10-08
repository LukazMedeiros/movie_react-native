import axios from "axios";

export async function getGenres() {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const { data } = await axios(options);

  return data.results;
}
