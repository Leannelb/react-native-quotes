import React, { Component } from "react";
import { StyleSheet, FlatList, View, Modal, Text, Button } from "react-native";
import axios from "axios";
import HeartButton from "./buttons/HeartButton";
class QuoteAndAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then((res) => {
      console.log(res);
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random() * data.length); //quote number
      let randomQuote = data[quoteNum]; //actual quote

      this.setState({
        quote: randomQuote["quote"],
        author: randomQuote["author"],
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    const { quote, author } = this.state;

    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Daily Quote</Text>

          <View style={styles.fontArea}>
            <Text style={styles.quoteBox}>{quote}</Text>
            <Text style={styles.author}>{author}</Text>
            <HeartButton/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#44014C"
            style={styles.buttonStyle}
            title="New Quote"
            onPress={this.getNewQuote}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flexDirection: "column",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  mainTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontStyle: 'italic',
    fontSize: 40,
    fontFamily: "ZenTokyoZoo-Regular",
    paddingVertical: 10,
  },
  fontArea: {
    paddingTop: 20,
  },
  quoteBox: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: 400,
    padding: 10,
    marginTop: 20,
    color: "#E9F1F7",
    backgroundColor: "rgba(65, 26, 201, 0.5)",
  },  
  author: {
    padding: 10,
    marginTop: 20,
    color: "#ffffff",
    fontSize: 20,
    backgroundColor: "rgba(65, 26, 201, 0.3)",
    justifyContent: "flex-start",
    alignItems: "baseline",
    alignSelf: "baseline",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start"
  },  
  box: {
    width: 50,
    height: 50,
  },
  row: {
  
  },
  buttonContainer: {
    paddingTop: 50,
  },
  buttonStyle: {
    paddingTop: 50,
    margin: 50,
  },

});

export default QuoteAndAuthor;
