import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imgSMV: {
        position: "absolute",
        width: "20%",
        height: "15%",
        top: "5%",
        alignSelf: "center",
    },
    user: {
        position: "absolute",
        width: "4%",
        height: "3%",
        top: "28%",
        left:"20%",
    },
    password: {
        position: "absolute",
        width: "4%",
        height: "3%",
        top: "48%",
        left:"20%",
    },
    fundo:{
        height:"100%",
        width:"100%",
        backgroundColor: "#89C5FD",
    },
    text: {
        fontFamily: "InterRegular",
        fontSize: 15,
        color: "#46A6FF",
    },
    input:{
        borderBottomColor: "#0D5692",
        borderBottomWidth: 2,
        width: "60%",
        margin: "10%",
        top: "20%",
        textAlign: "center",
    },
    retangulo:{
        position: "absolute",
        height:"75%",
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
        height: "12%",
        backgroundColor: "#89C5FD",
        alignItems: "center",
        justifyContent: "center",
        top:"27%",
    },
    buttonText:{
        color: "white",
        fontFamily: "CairoRegular",
        fontSize: 20,
    },
    buttonC: {
        borderRadius: 15,
        width: "50%",
        height: "12%",
        alignItems: "center",
        justifyContent: "center",
        top:"27%",
        margin: "3%",
        backgroundColor: "#eeeeee",
    },
    buttonTextC:{
        fontFamily: "CairoRegular",
        fontSize: 20,
        color: "#89C5FD",
    },
    EsqueceuButton: {
        top:"25%",
    }
});

export default styles