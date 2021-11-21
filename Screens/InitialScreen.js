import React from 'react'
import { View, Text ,TouchableOpacity,Image } from 'react-native'
import logo from '../assets/logo.png';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const InitialScreen = ({navigation}) => {
    React.useEffect(()=>{
       
        GoogleSignin.configure({
            webClientId: '1098050173444-j6bcg4sa1v59lca7v2qeqleh5u46ouv9.apps.googleusercontent.com',
          });

    })
   
    return (
        <View style={{backgroundColor:'#004C3F',width:'100%',height:'100%'}}>
             <View >
        <Image
             style={{width:'65%',height:'17%',alignSelf:'center',marginTop:'75%'}}
              source={logo}
            />
        </View>
            
                <View style={{width:'70%',bottom:"12%",alignSelf:'center',position:'absolute'}}>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        <TouchableOpacity style={{backgroundColor:'#007F61'}}
                        onPress={()=>{navigation.navigate('Login')}}
                        >
                            <Text style={{textAlign:'center',color:'#B5DCD6',fontWeight:'bold',height:'80%',elevation:10,textAlignVertical:'center',padding:1,marginTop:1}}>
                                LOG IN 

                            </Text>
                            
                        </TouchableOpacity>

                    </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{textAlign:'center',color:'#B5DCD6',height:'100%',elevation:10,textAlignVertical:'center',padding:5}}>
                        New To Shopify?
                    </Text>
                    <TouchableOpacity
                    style={{}}
                    onPress={()=>{navigation.navigate('Login')}}
                    >
                        <Text style={{textAlign:'center',color:'#007F61',fontWeight:'bold',fontSize:16,height:'100%',elevation:10,textAlignVertical:'center',padding:5}}>
                            SIGN UP
                        </Text>

                    </TouchableOpacity>

                </View>
                </View>
            

            
        </View>
    )
}

export default InitialScreen
