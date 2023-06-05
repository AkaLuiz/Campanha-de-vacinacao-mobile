import { Text, View, Image, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import {useFonts} from "expo-font";
import { TextInput } from 'react-native-gesture-handler';
import styles from "./style"

export default function CadastrarLogar({ navigation }) {

  const[fontsLoaded] = useFonts({
    CairoRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Cairo-Regular.ttf"),
    InterRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Inter-Regular.ttf"),
  })
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
      <Image 
        style={styles.imgSMV}
        source={require('../Images/image.png')} 
        />
    <View style={styles.retangulo}>
    
       <TextInput
        style={styles.input}
        placeholder = "Nome Completo"
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder = "CPF"
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder = "Data de Nasc"
        ></TextInput>
        
        <TextInput
        style={styles.input}
        placeholder = "E-mail"
        ></TextInput>
      
        <TextInput
        style={styles.input}
        placeholder = "Senha"
        ></TextInput>

        <TextInput
        style={styles.input}
        placeholder = "Confirmar Senha"
        ></TextInput>

      <TouchableOpacity
      onPress={() => navigation.navigate('Cadastrar')}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() =>  navigation.goBack()}
      style={styles.voltar}
      >
      <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>

    </View>
    </Pressable>
)}