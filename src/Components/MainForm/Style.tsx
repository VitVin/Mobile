import { StyleSheet } from "react-native";
export const Style = StyleSheet.create({
    main: {
      width: 400,
      height: 800,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 250
    },
    buttonView:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300
    },
    input: {
        marginBottom: 20,
        borderRadius: 30,
        borderWidth: 3,
        width: 300,
        height: 50,
        backgroundColor: "white",
        opacity: 0.5,
        color: "Darkgreen",
        borderColor: "darkgreen"
      },
  });
  