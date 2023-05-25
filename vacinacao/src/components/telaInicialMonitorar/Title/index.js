import { Text, View, Image, TouchableOpacity} from 'react-native';
import {useFonts} from "expo-font";
import styles from "./style"

export default function Title({ navigation }) {
  const[fontsLoaded] = useFonts({
    CairoRegular: require("C:/Users/luizc/vacinacao/vacinacao/assets/fonts/Cairo-Regular.ttf"),
    InterRegular: require("C:/Users/luizc/vacinacao/vacinacao/assets/fonts/Inter-Regular.ttf"),
  })
  return (
    <View style={styles.background}>
        <Image 
        style={styles.img}
        source={require('../Imagem/coronavirus-vaccine-senior-woman-and-a-doctor-with-a-syringe-concept-illustration-in-flat-cartoon-style-vector.jpg')} 
        />
      <Text style={styles.text}>Monitore suas vacinas</Text>
      <Text style={styles.info}>Um aplicativo de monitoramento a fim de ajudar a toda população a acompanhar e monitorar suas vacinas.</Text>
      <Text style={styles.infoR}>A VACINA É SEGURA: PROTEJA-SE</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('Cadastro')}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

