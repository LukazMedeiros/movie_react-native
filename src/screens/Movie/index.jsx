import { useContext, useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { IdContext } from "../../context/idContext.jsx";
import { getMovieInfo } from "../../utils/getMovieInfo.js";

export function Movie() {
  const { movieIDs } = useContext(IdContext);

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const randomID = movieIDs[Math.floor(Math.random() * movieIDs.length)];

    getMovieInfo(randomID)
      .then((data) => {
        console.log(data);
        setMovieData(data);
      })
      .catch((error) => console.error(error));

    console.log(randomID);
  }, []);

  return (
    <ScrollView>
      <Image
        source={{ uri: movieData.image }}
        style={{ width: "100%", height: 400, backgroundImage: "auto" }}
      />
      <Text>{`
      ${movieData.title} \n
      ${movieData.rating} \n
      ${movieData.runtime} \n
      ${movieData.genres} \n
      ${movieData.languages} \n
      ${movieData.director_names} \n
      ${movieData.description} \n
      ${movieData.imdb_date} \n
      `}</Text>
    </ScrollView>
  );
}
