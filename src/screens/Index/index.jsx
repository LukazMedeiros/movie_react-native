import { Picker } from "@react-native-picker/picker";
import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

//context
import { IdContext } from "../../context/idContext.jsx";
import { getGenres } from "../../utils/getGenres.js";
import { getMoviesIDs } from "../../utils/getMovies.js";

export function Index({ navigation }) {
  const { setMovieIDs } = useContext(IdContext);

  const [genres, setGenres] = useState(["selecione"]);

  const [selectedGenre, setSelectedGenre] = useState("selecione");

  const [year, setYear] = useState(null);

  useEffect(() => {
    getGenres()
      .then((response) => setGenres(response))
      .catch((error) => console.error);

    return () => {};
  }, []);

  async function handleSearch() {
    const actualYear = new Date().getFullYear();

    if (selectedGenre == "selecione") {
      console.error(`Um gênero precisa ser selecionado`);
      return;
    }

    if (Number(year) < 1957 || Number(year) > actualYear) {
      console.error(
        `Data inválida! O ano não pode ser menor que 1957 ou maior que ${actualYear}`
      );
      return;
    }

    console.log(year, selectedGenre);
    console.log(typeof year, typeof selectedGenre);
    const resposta = await getMoviesIDs(selectedGenre, year);
    setMovieIDs(resposta);
    console.log(resposta);
    console.log(resposta.length);
    navigation.navigate("Result");
  }

  const options = genres.map((item) => {
    const label = item == null ? "selecione" : item.toString();
    return <Picker.Item label={label} value={label} key={label} />;
  });

  return (
    <View>
      <Text>Selecione o gênero</Text>
      <Picker
        selectedValue={selectedGenre}
        onValueChange={(itemValue) => setSelectedGenre(itemValue)}
      >
        {options}
      </Picker>
      <Text>Digite o ano</Text>
      <TextInput
        placeholder="ex: 1999"
        keyboardType="numeric"
        onChangeText={setYear}
        value={year}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
}
