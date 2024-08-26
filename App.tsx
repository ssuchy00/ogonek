import React, { useEffect } from "react";
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SafeAreaView, Text, View } from "react-native";
import Home from "./Views/Home";
import Login from "./Views/Login";
import { COLORS } from "./style/style";
import Register from "./Views/Register";
import MyPets from "./Views/MyPets";
import Pet, { petInterface } from "./Views/Pet";
import BookAppointment_screen1, { BookAppointment_screen1Interface } from "./Views/BookAppointment_screen1";
import BookAppointment_screen2, { BookAppointment_screen2Interface } from "./Views/BookAppointment_screen2";
import BookAppointment_screen3, { BookAppointment_screen3Interface } from "./Views/BookAppointment_screen3";
import BookAppointment_screen4, { BookAppointment_screen4Interface } from "./Views/BookAppointment_screen4";



export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  MyPets: undefined;
  Pet: {pet:petInterface};
  BookAppointment_screen1: BookAppointment_screen1Interface
  BookAppointment_screen2: BookAppointment_screen2Interface
  BookAppointment_screen3: BookAppointment_screen3Interface
  BookAppointment_screen4: BookAppointment_screen4Interface
};

const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(()=>{
     
  }, [])

  

  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"   screenOptions={{headerBackground: ()=><View style={{flex: 1, backgroundColor: COLORS.mainColor}}/>}}> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MyPets" component={MyPets} />
            <Stack.Screen name="Pet" component={Pet} />
            <Stack.Screen name="BookAppointment_screen1" component={BookAppointment_screen1} />
            <Stack.Screen name="BookAppointment_screen2" component={BookAppointment_screen2} />
            <Stack.Screen name="BookAppointment_screen3" component={BookAppointment_screen3} />
            <Stack.Screen name="BookAppointment_screen4" component={BookAppointment_screen4} />
          </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default App