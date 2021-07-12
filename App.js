import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground, Text, View, Image } from "react-native";
import QuoteAndAuthor from "./components/QuoteAndAuthor";

export default function App() {
  const image = { uri: "asset:/images/peacfulImage.jpg" };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("./assets/images/peacfulImage.jpg")}
      >
        <View>
          <QuoteAndAuthor />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
