import axios from "axios";

export async function getMoviesIDs(genre, year) {
  console.log("recebido pela função", genre, year);
  let pagina = 1;
  let ids = [];
  let response = false;

  do {
    let options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      params: {
        info: "mini_info",
        page: pagina.toString(),
        titleType: "movie",
        genre: genre, //"Action",
        year: year.toString(), //"2020",
        startYear: year.toString(),
        endYear: year.toString(),
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    response = await axios(options);

    response.data.results.forEach((item) => {
      console.log(item.id);
      ids.push(item.id);
    });

    pagina++;
  } while (!!response.data.next);

  return ids;
}
