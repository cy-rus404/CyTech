import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Image
        style={{ height: 450, width: 450, left: 10, marginTop: 10 }}
        source={require("./assets/debit.png")}
      />
      <View>
        <Text
          style={{
            color: "#fff",
            marginLeft: 20,
            marginTop: 50,
            fontSize: 40,
            fontFamily: "Arial Rounded MT Bold",
            fontWeight: "bold",
          }}
        >
          Manage Your Money Wisely
        </Text>
        <Text style={{ color: "grey", margin: 20, fontSize: 15 }}>
          Effortless money management at your fingertips with CyTech
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#fff",
            margin: 20,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: 30,
            height: 5,
            backgroundColor: "green",
            margin: 20,
            borderRadius: 20,
            left: 1,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={{
            marginLeft: 110,
            width: 100,
            height: 50,
            backgroundColor: "green",
            borderRadius: 10,
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: 30, textAlign: "center", top: 5 }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return( 
  <Text>Hi</Text>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            color: "white",
            headerStyle: {
              backgroundColor: "#000",
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
