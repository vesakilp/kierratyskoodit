import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import codes from "./assets/codes.json";

interface Code {
    id: string;
    code1: string;
    code2: string;
    description: string;
    category: string;
    instructions: string;
    img: string;
    examples: string;
}

export default function App() {
    const [searchResult, setSearchResult] = useState<Code>();
    const doSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearchResult(codes.find(codeObj => codeObj.code1.toLowerCase() === searchTerm?.toLowerCase() || codeObj.code2.toLowerCase() === searchTerm?.toLowerCase()));
    }
    const imageFile = searchResult?.code1 ? images[searchResult?.code1.toLowerCase()] : "";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} adjustsFontSizeToFit={true}>kierratyskoodit.fi</Text>
      </View>
      <View style={styles.body}>
        <TextInput style={styles.searchField} onChange={doSearch} placeholder="Syötä kierrätyskoodi, esim. 01 tai pet"/>
        <View style={styles.resultView}>
            <Image style={styles.codeImage} source={imageFile} />
            <Text>{searchResult?.instructions}</Text>
        </View>
      </View>
        <View style={styles.footer}>
            <Text style={styles.white}>&copy;Vesa Kilpiäinen</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
  },
    header: {
      justifyContent: "center",
      backgroundColor: "#03fc62",
        width: "100%",
        height: "20%",
        textAlign: "center",
    },
    headerText: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
    },
    body: {
      justifyContent: "flex-start",
        backgroundColor: "#fff",
    },
  searchField: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 270,
  },
    resultView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 15,
        width: 270,
    },
    codeImage: {
        width: 75,
        height: 75,
    },
    footer: {
        height: "20%",
        width: "100%",
        backgroundColor: "#03fc62",
        textAlign: "center",
        justifyContent: "center",
    },
    white: {
      color: "#fff",
    }
});

const images: {[key: string]: string} = {
    "01": require("./assets/01.svg"),
    "02": require("./assets/02.svg"),
    "03": require("./assets/03.svg"),
    "04": require("./assets/04.svg"),
    "05": require("./assets/05.svg"),
    "06": require("./assets/06.svg"),
    "07": require("./assets/07.svg"),
    "08": require("./assets/08.png"),
    "09": require("./assets/09.png"),
    "11": require("./assets/11.svg"),
    "12": require("./assets/12.png"),
    "13": require("./assets/13.png"),
    "20": require("./assets/20.svg"),
    "21": require("./assets/21.svg"),
    "22": require("./assets/22.svg"),
    "40": require("./assets/40.svg"),
    "41": require("./assets/41.svg"),
    "50": require("./assets/50.svg"),
    "51": require("./assets/51.svg"),
    "60": require("./assets/60.svg"),
    "61": require("./assets/61.svg"),
    "70": require("./assets/70.svg"),
    "71": require("./assets/71.svg"),
    "72": require("./assets/72.svg"),
    "73": require("./assets/73.png"),
    "74": require("./assets/74.png"),
    "75": require("./assets/75.png"),
    "76": require("./assets/76.png"),
    "77": require("./assets/77.png"),
    "78": require("./assets/78.png"),
    "79": require("./assets/79.svg"),
    "81": require("./assets/81.svg"),
    "84": require("./assets/84.svg"),
    "87": require("./assets/87.png"),
    "90": require("./assets/90.png"),
    "91": require("./assets/91.png"),
    "abs": require("./assets/abs.svg"),
    "pa": require("./assets/pa.svg"),
};
