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
        width: "14%",
        height: "18%",
        bottom: "55%",
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
        height:"40%",
        width:"100%",
        bottom:0,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: "center",
    },
    button: {
        borderRadius: 15,
        width: "50%",
        height: "17%",
        backgroundColor: "#89C5FD",
        alignItems: "center",
        justifyContent: "center",
        top: "53%",
    },
    buttonC: {
        width: "50%",
        height: "17%",
        alignItems: "center",
        justifyContent: "center",
        top: "53%",
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
});

export default styles