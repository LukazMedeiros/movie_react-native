import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export function Index() {
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selectedGenre, setSelectedGenre] = useState("selecione");

  const options = genres.map((item) => {
    const label = item.toString();
    return <Picker.Item label={label} value={item} key={item} />;
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
