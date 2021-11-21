import React from 'react'
import { View, Text } from 'react-native'
import AnimatedSplash from "react-native-animated-splash-screen";
import { set } from 'react-native-reanimated';
import InitialScreen from "../Screens/InitialScreen";
import AsyncStorage from "@react-native-async-storage/async-storage"

const SplashScreen = ({navigation}) => {
    const [loading,setLoading]=React.useState(true);
    const [token,setToken]=React.useState(false);


    const displayData = async ()=>{  
        try{  
         
          let user2 = await AsyncStorage.getItem('token');  
         
         
          console.log("user 1 is",user2);
          if(user2){
              navigation.navigate('Datalist')
              setToken(true);
          }
          else{
            navigation.navigate('InitialScreen')
          }
        
       
           
        }  
        catch(error){  
            console.log("erroer found",error)
          alert(error)  
        }  
      }
    React.useEffect(() => {
      
      
         
            const timer = setTimeout(() => {
                setLoading(false);
              displayData()
              

            }, 1000);
            return () => clearTimeout(timer);
         

    })

    return (
        <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("../assets/logo.png")}
        backgroundColor={"#004C3F"}
        logoHeight={150}
        logoWidth={150}
      >
        
      </AnimatedSplash>
    )
}

export default SplashScreen
