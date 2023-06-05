import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from "expo-font";
import Title from "./src/components/telaInicialMonitorar/Title/index";
import Form from "./src/components/CadastrarLogar/Form/index";
import Logar from "./src/components/InserirDados/Form/index";
import Cadastrar from "./src/components/Cadastrar/Form/index";

const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded] = useFonts({
    CairoRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Cairo-Regular.ttf"),
    InterRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Inter-Regular.ttf"),
  })

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela">
        <Stack.Screen name="Tela" component={Title} />
        <Stack.Screen name="Cadastro" component={Form} />
        <Stack.Screen name="Logar" component={Logar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


