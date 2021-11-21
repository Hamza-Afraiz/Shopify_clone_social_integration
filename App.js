import 'react-native-gesture-handler';

import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,Modal,Alert} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from "./Screens/InitialScreen";
import Login from "./Screens/Login";
import Datalist from "./Screens/Datalist";
import SplashScreen from "./Screens/SplashScreen";
const Stack = createStackNavigator();


export default function App({navigation,routeName}) {
  React.useEffect(() => {
    
     
  }, []);
  
  return (
   
    <NavigationContainer>
<Stack.Navigator mode='modal'
      initialRouteName={"SplashScreen"}
      
    >
      <Stack.Screen
      
      name="SplashScreen"
      component={SplashScreen}
     options={({ navigation }) => ({
                  headerTintColor: 'white',
                  headerStyle: {
                      backgroundColor: "grey"
                  },
                  headerShown:false
                  
                
                       
              })
              }
      
    />
        <Stack.Screen
      
      name="InitialScreen"
      component={InitialScreen}
     options={({ navigation }) => ({
                  headerTintColor: 'white',
                  headerStyle: {
                      backgroundColor: "grey"
                  },
                  headerShown:false
                  
                
                       
              })
              }
      
    />
     <Stack.Screen
      
      name="Login"
      component={Login}
     options={({ navigation }) => ({
                  headerTintColor: 'white',
                  headerStyle: {
                      backgroundColor: "grey"
                  },
                  headerShown:false
                  
                
                       
              })
              }
      

    />
    <Stack.Screen
      
      name="Datalist"
      component={Datalist}
     options={({ navigation }) => ({
                  headerTintColor: 'white',
                  headerStyle: {
                      backgroundColor: "grey"
                  },
                  headerShown:false
                  
                
                       
              })
              }
      
    />
     
      
    </Stack.Navigator>

   
     
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
