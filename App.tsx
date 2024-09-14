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
import MedicalRecords, { MedicalRecordsInterface } from "./Views/MedicalRecords";
import MedicalRecords_choosePet from "./Views/MedicalRecords_choosePet";



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
  MedicalRecordsChoosePet: MedicalRecordsInterface
  MedicalRecords: MedicalRecordsInterface
};

const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(()=>{
     
  }, [])

  

  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"   screenOptions={{headerBackground: ()=><View style={{flex: 1, backgroundColor: COLORS.mainColor}}/>}}> 
            <Stack.Screen name="Home" component={Home} options={{title: "Strona główna"}}/>
            <Stack.Screen name="Login" component={Login} options={{title: "Logowanie"}}/>
            <Stack.Screen name="Register" component={Register} options={{title: "Rejestracja"}}/>
            <Stack.Screen name="MyPets" component={MyPets} options={{title: "Moje zwierzęta"}}/>
            <Stack.Screen name="Pet" component={Pet} options={{title: ""}}/>
            <Stack.Screen name="BookAppointment_screen1" component={BookAppointment_screen1} options={{title: "Umów wizytę"}}/>
            <Stack.Screen name="BookAppointment_screen2" component={BookAppointment_screen2} options={{title: "Umów wizytę"}}/>
            <Stack.Screen name="BookAppointment_screen3" component={BookAppointment_screen3} options={{title: "Umów wizytę"}}/>
            <Stack.Screen name="BookAppointment_screen4" component={BookAppointment_screen4} options={{title: "Umów wizytę"}}/>
            <Stack.Screen name="MedicalRecordsChoosePet" component={MedicalRecords_choosePet} options={{title: "Historia leczenia"}}/>
            <Stack.Screen name="MedicalRecords" component={MedicalRecords} options={{title: "Historia leczenia"}} />
          </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default App