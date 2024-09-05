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
      <TouchableOpacity onPress={() => navigation.navigate("Cards")}

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
        <Text
          style={{
            color: "#fff",
            marginTop: 6,
            marginLeft: 200,
            marginTop: 60,
            fontFamily: "American Typewriter",
          }}
        >
          Acc No 010078634032
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 20 }}>
          Quick Actions
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 60,
            height: 65,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "70%",
              resizeMode: "contain",
              marginTop: 7,
              marginLeft: 9,
            }}
            source={require("./assets/airtime.png")}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 65,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "70%",
              resizeMode: "contain",
              marginTop: 7,
              marginLeft: 9,
            }}
            source={require("./assets/wifi.png")}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 65,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "70%",
              resizeMode: "contain",
              marginTop: 7,
              marginLeft: 9,
            }}
            source={require("./assets/send.png")}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 65,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "70%",
              resizeMode: "contain",
              marginTop: 7,
              marginLeft: 9,
            }}
            source={require("./assets/light.png")}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 65,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{
              height: "70%",
              width: "70%",
              resizeMode: "contain",
              marginTop: 7,
              marginLeft: 9,
            }}
            source={require("./assets/tv.png")}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ margin: 20, fontSize: 20, fontWeight: "bold" }}>
          Transactions
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
            marginTop: 23,
            marginLeft: 180,
          }}
        >
          View All
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5 }}
            source={require("./assets/flix.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Netflix
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 15,
              marginLeft: 160,
              marginTop: 19,
            }}
          >
            -GH₵50.00
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: 50,
              width: 50,
              marginTop: 5,
              borderRadius: "50%",
              marginLeft: 5,
            }}
            source={require("./assets/axe.jpg")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Hookup
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 15,
              marginLeft: 140,
              marginTop: 19,
            }}
          >
            -GH₵2500.00
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5, marginLeft: 5 }}
            source={require("./assets/spotify.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Spotify
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 15,
              marginLeft: 150,
              marginTop: 19,
            }}
          >
            -GH₵25.00
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: 50,
              width: 50,
              marginTop: 5,
              borderRadius: "50%",
              marginLeft: 5,
            }}
            source={require("./assets/avr.jpg")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Bro
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 15,
              marginLeft: 190,
              marginTop: 19,
            }}
          >
            -GH₵5.00
          </Text>
        </View>
      </View>
    </View>
  );
}


function CardScreen({navigation}){
  return(
    <View>
    <View

    style={{
      height: 150,
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
    <Text style={{ color: "gray", textAlign: "center",bottom:20 }}>
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
        bottom:20
      }}
    >
      GH₵ 180,000
    </Text>
    <Text
      style={{
        color: "#fff",
        marginTop: 6,
        marginLeft: 200,
        marginTop: 60,
        fontFamily: "American Typewriter",
        bottom:45
      }}
    >
      Acc No 010078634032
    </Text>
  </View>
  <View 
style={{
  height: 150,
  width: 370,
  backgroundColor: "#000",
  margin: 20,
  borderRadius: 10,
  marginTop:0
}}
>
<Image
  style={{ height: 35, width: 60, margin: 10 }}
  source={require("./assets/master.png")}
/>
<Text style={{ color: "gray", textAlign: "center",bottom:20 }}>
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
    bottom:20
  }}
>
  GH₵ 180,000
</Text>
<Text
  style={{
    color: "#fff",
    marginTop: 6,
    marginLeft: 200,
    marginTop: 60,
    fontFamily: "American Typewriter",
    bottom:45
  }}
>
  Acc No 010078634032
</Text>
</View>
<Text style={{fontWeight:'bold',fontSize:20,margin:20}}>Card Settings</Text>
<TouchableOpacity
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5 }}
            source={require("./assets/lock.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Lock Card
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop:10
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5 }}
            source={require("./assets/alert.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Set Up Alerts
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop:10
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5 }}
            source={require("./assets/password.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Change Password
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          height: 60,
          width: 380,
          marginLeft: 20,
          borderRadius: 10,
          marginTop:10
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginTop: 5 }}
            source={require("./assets/limit.png")}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Set Spending Limit
          </Text>
        </View>
      </TouchableOpacity>

</View>
  )
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
        <Stack.Screen name="Cards" component={CardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
