import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imgSMV: {
        position: "absolute",
        width: "15%",
        height: "10%",
        top: "5%",
        alignSelf: "center",
    },
    fundo:{
        height:"100%",
        width:"100%",
        backgroundColor: "#89C5FD",
    },
    input:{
        borderBottomColor: "#0D5692",
        borderBottomWidth: 2,
        width: "60%",
        margin: "4%",
        top: "7%",
    },
    retangulo:{
        position: "absolute",
        height:"80%",
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
        height: "10%",
        backgroundColor: "#89C5FD",
        alignItems: "center",
        justifyContent: "center",
        top:"15%",
    },
    buttonText:{
        color: "white",
        fontFamily: "CairoRegular",
        fontSize: 20,
    },
    voltar: {
        top:"16%",
    },
    voltarText:{
        fontFamily: "InterRegular",
        fontSize: 15,
        color: "#46A6FF",
    }
});

export default styles