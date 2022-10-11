import { NavigationContainer } from "@react-navigation/native";
import { IdContextProvider } from "../context/idContext.jsx";
import { StackRoutes } from "./stack-routes.jsx";

export function Routes() {
  return (
    <NavigationContainer>
      <IdContextProvider>
        <StackRoutes />
      </IdContextProvider>
    </NavigationContainer>
  );
}
