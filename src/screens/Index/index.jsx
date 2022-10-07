import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export function Index() {
  const [genres, setGenres] = useState(["selecione"]);

  const [selectedGenre, setSelectedGenre] = useState("selecione");

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
  }, []);

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
      <TextInput placeholder="ex: 1999" keyboardType="numeric" />
      <Button title="Buscar" />
    </View>
  );
}
