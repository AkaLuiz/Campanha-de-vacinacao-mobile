import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    img: {
        position: "absolute",
        width: "85%",
        height: "80%",
        bottom: "70%",
        alignSelf: "center",
    },
    imgSe: {
        position: "absolute",
        width: "17%",
        height: "15%",
        bottom: "65%",
        alignSelf: "center",
    },
    imgSMV: {
        position: "absolute",
        width: "20%",
        height: "15%",
        top: "5%",
        alignSelf: "center",
    },
    fundo:{
        height:"100%",
        width:"100%",
        backgroundColor: "#89C5FD",
    },
    text: {
        fontFamily: "InterRegular",
        fontSize: 25,
        textAlign: "center",
        alignItems: "center",
        color: "#000000",
        padding: 30,
        top: "20%",
    },
    retangulo:{
        position: "absolute",
        height:"60%",
        width:"100%",
        top:"55%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
    },
    button: {
        borderRadius: 50,
        width: "50%",
        height: "12%",
        backgroundColor: "#89C5FD",
        alignItems: "center",
        justifyContent: "center",
        top: "40%",
    },
    buttonC: {
        borderRadius: 50,
        width: "50%",
        height: "12%",
        alignItems: "center",
        justifyContent: "center",
        top: "40%",
    },
    buttonTextC:{
        fontFamily: "CairoRegular",
        fontSize: 20,
        color: "#89C5FD",
    },
    buttonText:{
        color: "white",
        fontFamily: "CairoRegular",
        fontSize: 20,
        justifyContent: "center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});

export default styles