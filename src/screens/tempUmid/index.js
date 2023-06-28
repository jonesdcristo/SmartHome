import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "../../firebase.config";

import background from "../../assets/cinza.jpg";

const Weather = () => {
  const [temp, setTemp] = useState(31);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    const data = ref(db);

    onValue(data, (snapshot) => {
      setTemp((snapshot.val().temp));
      setHumidity((snapshot.val().humid));
      setPressure((snapshot.val().pressure));
    });
  }, [db]);
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>{Math.round((temp))}°</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humid}>
            <Text style={styles.dataText}>{humidity}%</Text>
            <Text style={styles.title}>Umidade</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.dataText}>{pressure}</Text>
            <Text style={styles.title}>Luz</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "110",
    textAlign: "right",
    color: "#DF7514",
    paddingRight: 60,
   
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  spacer: {
    height: "30%",
  },
  dataWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#DF7514",
  },

  humid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 40,
    fontWeight: "200",
    color: "#DF7514",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
});