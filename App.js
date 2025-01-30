import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/StackNavigation";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};
export default App;
