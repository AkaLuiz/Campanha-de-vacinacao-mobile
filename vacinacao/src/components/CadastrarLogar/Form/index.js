import { Text, View, Image, TouchableOpacity } from 'react-native';
import {useFonts} from "expo-font";
import styles from "./style"

export default function CadastrarLogar({ navigation }) {
  const[fontsLoaded] = useFonts({
    CairoRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Cairo-Regular.ttf"),
    InterRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Inter-Regular.ttf"),
  })
  return (
    <View style={styles.fundo}>
      <Image 
        style={styles.imgSMV}
        source={require('../Images/image.png')} 
        />
      <Text style={styles.text}>Sistema de Monitoramento de Vacinas</Text>
    <View style={styles.retangulo}>
    
       <Image 
        style={styles.img}
        source={require('../Images/medicalresearch.png')} 
        />
        <Image 
        style={styles.imgSe}
        source={require('../Images/seringa.png')} 
        />
      
        <TouchableOpacity
      onPress={() => navigation.navigate('Logar')}
      style={[styles.button, styles.shadowProp]}
      >
      <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Cadastrar')}
      style={styles.buttonC}
      >
      <Text style={styles.buttonTextC}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    </View>
)}