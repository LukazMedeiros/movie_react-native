import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { getMoviesIDs } from "../../utils/getMovies.js";

export function Index() {
  const [genres, setGenres] = useState(["selecione"]);

  const [selectedGenre, setSelectedGenre] = useState("selecione");

  const [year, setYear] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch("https://moviesdatabase.p.rapidapi.com/titles/utils/genres", options)
      .then((response) => response.json())
      .then((response) => {
        setGenres(response.results);
      })
      .catch((err) => console.error(err));

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
    console.log(resposta);
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
