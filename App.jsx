//
import { Header } from "./src/components/Header/index.jsx";
import { Background } from "./src/components/Background/index.jsx";
import { Index } from "./src/screens/Index/index.jsx";
import { Movie } from "./src/screens/Movie/index.jsx";
//context
import { IdContextProvider } from "./src/context/idContext.jsx";

export default function App() {
  return (
    <Background>
      <IdContextProvider>
        <Header />
        {/* <Index /> */}
        <Movie />
      </IdContextProvider>
    </Background>
  );
}
