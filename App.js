import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 450, height: 450, marginTop: 60, right: 27 }}
        source={require("./assets/debit.png")}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 40,
          marginTop: 70,
          marginLeft: 20,
          fontWeight: "bold",
          fontFamily: "Arial rounded MT bold",
        }}
      >
        Manage Your Money Wisely
      </Text>
      <Text style={{ color: "grey", margin: 20, fontSize: 15 }}>
        Effortless money management at your fingertips with CyTech
      </Text>
      <View>
        <View
          style={{ width: 80, height: 10, backgroundColor: "#fff", margin: 30,borderRadius:20 }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
