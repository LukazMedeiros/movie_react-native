import { Button, Text, TextInput, View } from "react-native";

export function Index() {
  return (
    <View>
      <Text>Selecione o gênero</Text>
      <TextInput placeholder="gênero" />
      <Text>Digite o ano</Text>
      <TextInput placeholder="ex: 1999" keyboardType="numeric" />
      <Button title="Buscar" />
    </View>
  );
}
