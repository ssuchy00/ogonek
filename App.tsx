import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import TopBarCurved from "./Components/TopBarCurved";
import Home from "./Views/Home";

const App = () => {

  return (
    <NavigationContainer>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
    </NavigationContainer>
  )
  
}

export default App