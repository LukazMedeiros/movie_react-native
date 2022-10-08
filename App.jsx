//
import { Header } from "./src/components/Header/index.jsx";
import { Background } from "./src/components/Background/index.jsx";
import { Index } from "./src/screens/Index/index.jsx";
//context
import { IdContextProvider } from "./src/context/idContext.jsx";

export default function App() {
  return (
    <Background>
      <IdContextProvider>
        <Header />
        <Index />
      </IdContextProvider>
    </Background>
  );
}
