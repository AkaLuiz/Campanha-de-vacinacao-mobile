import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from "expo-font";
import Title from "./src/components/telaInicialMonitorar/Title"
import Form from "./src/components/CadastrarLogar/Form"

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Title} />
        <Stack.Screen name="Cadastro" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


