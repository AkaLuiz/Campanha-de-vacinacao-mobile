import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        height: "100%",
        width: "100%",
    },
    text: {
        fontFamily: "InterRegular",
        fontSize: 30,
        textAlign: "center",
        alignItems: "center",
        color: "#000000",
        padding:40,
    },
    img: {
        width: "95%",
        height: "40%",
        alignSelf: "center",
        marginTop: "20%",
    },
    info: {
        fontFamily: "InterRegular",
        fontSize: 15,
        lineHeight: 18,
        textAlign: "center",
        alignItems: "center",
        color: "#000000",
    },
    infoR: {
        color: "red",
        fontFamily: "InterRegular",
        fontSize: 15,
        lineHeight: 18,
        textAlign: "center",
        alignItems: "center",
    },
    button: {
        borderRadius: 50,
        width: "50%",
        height: "7%",
        backgroundColor: "#89C5FD",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        top: "5%",
    },
    buttonText:{
        fontFamily: "CairoRegular",
        fontSize: 20,
        color:"white",
        textAlign: "center",
        alignItems: "center",
    }
});

export default styles