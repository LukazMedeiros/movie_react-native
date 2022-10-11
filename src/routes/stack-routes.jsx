import { createNativeStackNavigator } from "@react-navigation/native-stack";

//component
import { Index } from "../screens/Index/index.jsx";
import { Movie } from "../screens/Movie/index.jsx";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Index} />
      <Screen name="Result" component={Movie} />
    </Navigator>
  );
}
