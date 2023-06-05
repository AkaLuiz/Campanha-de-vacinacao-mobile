import { Text, View, Image, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import {useFonts} from "expo-font";
import { TextInput } from 'react-native-gesture-handler';
import CustomSwitch from './CustomSwitch';
import styles from "./style"

export default function InsirirDados({ navigation }) {
  const[fontsLoaded] = useFonts({
    CairoRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Cairo-Regular.ttf"),
    InterRegular: require("C:/Users/luizc/Campanha-de-vacinacao-mobile/vacinacao/assets/fonts/Inter-Regular.ttf"),
  })

  const onSelectSwitch = () => {
    
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>

      <Image 
        style={styles.imgSMV}
        source={require('../Images/image.png')} 
        />

      <View style={styles.retangulo}>

      <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Paciente'}
          option2={'Funcionário'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'white'}
        />
      
      <Image 
        style={styles.user}
        source={require('../Images/user.png')} 
        />

        <TextInput
        style={styles.input}
        placeholder = "E-mail"
        ></TextInput>

        <Image 
        style={styles.password}
        source={require('../Images/password.png')} 
        />

        <TextInput
        style={styles.input}
        placeholder = "Senha"
        ></TextInput>

      <TouchableOpacity
      onPress={() => navigation.navigate('Logar')}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={() => navigation.navigate('Cadastrar')}
      style={styles.buttonC}
      >
      <Text style={styles.buttonTextC}>Cadastre-se</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
      onPress={() => navigation.navigate('Logar')}
      style={styles.EsqueceuButton}
      >
      <Text style={styles.text}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      </View>
      
    </Pressable>
)}