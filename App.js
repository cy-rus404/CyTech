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
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ height: 50, width: 50, margin: 10 }}
          source={require("./assets/avatar.png")}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontFamily: "Avenir next condensed",
            fontWeight: "bold",
          }}
        >
          Hello, Cyrus
        </Text>
        <Image
          style={{ width: 23, height: 25, marginLeft: 210, marginTop: 20 }}
          source={require("./assets/bell.png")}
        />
      </View>
      <View
        style={{
          height: 200,
          width: 370,
          backgroundColor: "#000",
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Image
          style={{ height: 35, width: 60, margin: 10 }}
          source={require("./assets/master.png")}
        />
        <Text style={{ color: "gray", textAlign: "center" }}>
          Total Balance
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
            fontFamily: "Arial rounded mt bold",
            marginTop: 3,
          }}
        >
          GH₵ 180,000
        </Text>
        <Text style={{color:"#fff",marginTop:6,marginLeft:200,marginTop:60,fontFamily:'American Typewriter'}}>Acc No 010078634032</Text>
      </View>
      <View>
        <Text style={{marginLeft:20,fontWeight:'bold',fontSize:20}}>Quick Actions</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{width:60,height:65,backgroundColor:'#fff',borderRadius:10,marginTop:15,marginLeft:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84}}>
        <Image style={{height:'70%',width:'70%',resizeMode:'contain',marginTop:7,marginLeft:9}} source={require('./assets/airtime.png')}/>
      </View>
      <View style={{width:60,height:65,backgroundColor:'#fff',borderRadius:10,marginTop:15,marginLeft:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84}}>
        <Image style={{height:'70%',width:'70%',resizeMode:'contain',marginTop:7,marginLeft:9}} source={require('./assets/wifi.png')}/>
      </View>
      <View style={{width:60,height:65,backgroundColor:'#fff',borderRadius:10,marginTop:15,marginLeft:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84}}>
        <Image style={{height:'70%',width:'70%',resizeMode:'contain',marginTop:7,marginLeft:9}} source={require('./assets/send.png')}/>
      </View>
      <View style={{width:60,height:65,backgroundColor:'#fff',borderRadius:10,marginTop:15,marginLeft:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84}}>
        <Image style={{height:'70%',width:'70%',resizeMode:'contain',marginTop:7,marginLeft:9}} source={require('./assets/light.png')}/>
      </View>
      <View style={{width:60,height:65,backgroundColor:'#fff',borderRadius:10,marginTop:15,marginLeft:20,shadowColor:'#000',shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84}}>
        <Image style={{height:'70%',width:'70%',resizeMode:'contain',marginTop:7,marginLeft:9}} source={require('./assets/tv.png')}/>
      </View>

      </View>
    </View>
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
