import React,{useState,useRef} from 'react'
import { View, Text ,TouchableOpacity,Image,Button } from 'react-native'
import logo from '../assets/logo.png';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FacebookSocialButton,GoogleSocialButton,LinkedInSocialButton } from "react-native-social-buttons";
import { NavigationContainer } from '@react-navigation/native';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import AsyncStorage from "@react-native-async-storage/async-storage"
import LinkedInModal from 'react-native-linkedin'

const Login = ({navigation}) => {
    const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const[condition,setCondition] = useState("0");
  const linkedRef = useRef(null);
  // Handle user state changes
  function onAuthStateChanged(user) {
   
    setUser(user);
    if (initializing) setInitializing(false);
  }
    React.useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '1098050173444-j6bcg4sa1v59lca7v2qeqleh5u46ouv9.apps.googleusercontent.com',
          });
          if (user) {
            AsyncStorage.setItem("token", "true")
            navigation.navigate('Datalist')
          }
          const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
          return subscriber;

    },[user])
    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
        if (result.isCancelled) {
    console.log( 'User cancelled the login process');
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          console.log( 'Something went wrong obtaining access token');
        }
        console.log("data is ",data)
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        console.log("facebook credential is ",facebookCredential)
        //navigation.navigate('Datalist')
      
        // Sign-in the user with the credential
       return auth().signInWithCredential(facebookCredential);
      }
    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('Google credentialis ',googleCredential)
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
      const navi=()=>{navigation.navigate('Datalist')}
     async function onLinkedButtonPress(){
         setCondition('1');


     }
     const onSuccessCallback=()=>{
         console.log("SUCCESS")
    }
     
    return (
        <View style={{backgroundColor:'#004C3F',width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
             <View >
        <Image
             style={{width:'65%',height:'19%',alignSelf:'center',marginTop:'45%'}}
              source={logo}
            />
        </View>
            
        <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <GoogleSocialButton onPress={onGoogleButtonPress}/>
        <FacebookSocialButton onPress={onFacebookButtonPress}/>
        {/* <LinkedInSocialButton onPress={onLinkedButtonPress}/> */}
        <LinkedInModal
          ref={linkedRef}
          shouldGetAccessToken={true}
          clientID="86agynumrl6bd2"
          clientSecret="Qr8tRp0vkazI8kLy"
          onSuccess={item=>onSuccessCallback(item)}
          redirectUri="https://hamzaAfraiz.tech"
          onClose={() =>{navigation.navigate('Datalist')}}
         // onError={onLinkedButtonPress}
          onSignIn={()=>{navigation.navigate('Datalist')}}
          renderButton={()=> <LinkedInSocialButton onPress={()=>{linkedRef.current.open()}}/>}
        />
       
       
     
    </View>

                    

                  
            

            
        </View>
    )
}

export default Login
