import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as Linking from "expo-linking";
import codes from "./assets/codes.json";
import { Helmet } from "react-helmet";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
    const imageFile = searchResult?.img ? images[searchResult?.img.toLowerCase()] : "";
    const openEmailLink = () => {
        Linking.openURL("mailto: kierratyskoodit@gmail.com");
    };

    const firebaseConfig = {
        apiKey: "AIzaSyBCmxSDlm3a7Z57OVI4hS7y-_4pSVZsgz4",
        authDomain: "kierratyskoodit-4e46c.firebaseapp.com",
        projectId: "kierratyskoodit-4e46c",
        storageBucket: "kierratyskoodit-4e46c.appspot.com",
        messagingSenderId: "1078267147192",
        appId: "1:1078267147192:web:05e6f33381bde7a6f8154d",
        measurementId: "G-K3XN30LW71"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  return (
    <View style={styles.container}>
        <Helmet>
            <title>kierratyskoodit.fi beta</title>
            <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/3eab82e5f6adcf9ad640d7d4/script.js"></script>
        </Helmet>
      <View style={styles.header}>
        <Text style={styles.headerText} adjustsFontSizeToFit={true}>kierratyskoodit.fi</Text>
      </View>
      <View style={styles.body}>
        <TextInput keyboardType="name-phone-pad" style={styles.searchField} onChange={doSearch} placeholder="Syötä kierrätyskoodi, esim. 01 tai pet"/>
          {!!searchResult &&
              <View style={styles.resultView}>
                  <Image style={styles.codeImage} source={imageFile} />
                  <View style={styles.info}>
                    <Text>{searchResult?.instructions}</Text>
                  </View>
              </View>
          }
          {!searchResult &&
          <View style={styles.resultView}>
              <Image style={styles.codeImage} source={images["01"]} />
              <View style={styles.info}>
                  <Text>Etsi pakkauksesta viereisen esimerkin kaltainen kuva ja syötä siitä löytyvä numero tai teksti (esim. 01 tai pet) ylläolevaan tekstikenttään</Text>
              </View>
          </View>
          }
      </View>
        <View style={styles.footer}>
            <Text style={styles.footerText} onPress={openEmailLink}>Anna palautetta:<br/>kierratyskoodit@gmail.com</Text>
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
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#44AF44",
      width: "100%",
      height: "20%"
    },
    headerText: {
        display: "flex",
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        flexDirection: "column",
        justifyContent: "center"
    },
    body: {
      justifyContent: "center",
        backgroundColor: "#fff",
        height: "60%",
    },
    info: {
      width: 190,
        height: 100,
        justifyContent: "center",
        marginLeft: 10
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
        padding: 15,
        width: 300,
    },
    codeImage: {
        width: 75,
        height: 75,
    },
    footer: {
        height: "20%",
        width: "100%",
        backgroundColor: "#44AF44",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    footerText: {
      display: "flex",
      color: "#fff",
      fontSize: 12,
      fontWeight: "bold",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
  },
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
