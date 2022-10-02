import { Text } from "react-native";
//
import { Header } from "./src/components/Header/index.jsx";
import { Background } from "./src/components/Background/index.jsx";

export default function App() {
  return (
    <Background>
      <Header />
      <Text>pagina iniial</Text>
    </Background>
  );
}
