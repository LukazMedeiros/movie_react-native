//
import { Header } from "./src/components/Header/index.jsx";
import { Background } from "./src/components/Background/index.jsx";
import { Index } from "./src/screens/Index/index.jsx";

export default function App() {
  return (
    <Background>
      <Header />
      <Index />
    </Background>
  );
}
