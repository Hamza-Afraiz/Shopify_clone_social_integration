import React from 'react'
import { View, Text,ScrollView,FlatList,Image,StatusBar,ActivityIndicator } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
  import LinearGradient from 'react-native-linear-gradient';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Icon2 from 'react-native-vector-icons/MaterialIcons';
  import Toast from 'react-native-toast-message';
import axios from "react-native-axios";
const DATA = [
    {
      id: '1',
      title: 'Platinum Business Card',
      rating:'5x',
      percentage:'5.7%',
      url:'../assets/platinum.png'
    },
    {
        id: '2',
        title: 'Gold',
        rating:'3x',
        percentage:'5.7%',
        url:'../assets/platinum.png'
      },
      {
        id: '3',
        title: 'Bronze Business Card',
        rating:'1x',
        percentage:'5.7%',
        url:'../assets/platinum.png'
      },
      {
        id: '4',
        title: 'Platinum',
        rating:'5x',
        percentage:'5.7%',
        url:'../assets/platinum.png'
      },
   
   
  ];
const  Datalist = () => {
    const [cards, setCards] = React.useState([]);
    const [condition,setCondition] = React.useState('0')
    React.useEffect(() => {

        Toast.show({
            type: 'info',
            //position: 'top | bottom',
           
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 100,
      text1: 'Hello',
      text2: 'Wellcome Back Dear Client 👋'
    });
        axios
        .get('https://www.reddit.com/r/aww.json')
        .then(function (response) {
          const dataArray = response.data['data']['children'];
          
          console.log("picture array is",dataArray['0']['data']);
          var filteredData;
          for (let i = 0; i < dataArray.length; i++) {
            filteredData = dataArray[i]['data']['name'];
            console.log("filtered data  before is ",filteredData)
            setCards(cards => [...cards, filteredData]);
            // if (filteredData.includes("name")) {
            //   setCards(cards => [...cards, filteredData]);
            //   console.log("filtered data is",filteredData);
            // }
          }
          setCondition('1');
        
        })
        .catch(function (error) {
          // handle
          alert(error.message);
      
        });

       
    }, [])
    return (
        
        <View style={{backgroundColor:"#020002",width:"100%",height:"100%"}}>
              <StatusBar backgroundColor="#020002" />
              
        <LinearGradient
            colors={["#0B080E","#0B080E"]}
            style={{height: hp('11%')}}>
                <View style={{display:'flex',justifyContent:'space-between',flexDirection:"row",marginHorizontal:15,marginTop:hp(4)}}>
                     <Text style={{color:'#F7F7F7',fontSize:26,fontWeight:'bold'}}>
                         Cheat Sheet
                     </Text>
                     <Icon name="bell-o" style={{marginTop:8}} size={30} color="#4F5356" />
                </View>
            
          </LinearGradient>
          
           
          <Toast ref={(ref) => Toast.setRef(ref)} /> 
         {condition=="1"?
         <ScrollView style={{width:"100%",height:"50%",backgroundColor:'#0B080E',marginTop:hp(1.5)}}>
             <View style={{display:'flex',flexDirection:'row',marginHorizontal:wp(5),justifyContent:'center',marginVertical:hp(2)}}>
          <Text style={{color:'#4F5356',fontSize:12,fontWeight:'bold',marginTop:hp(0)}}>
                         Your best cards for each spend money.
                     </Text>
                     <Text style={{color:'#122D5A',fontSize:12,marginTop:hp(0)}}>
                         Learn More
                     </Text>

          </View>
         {cards.map(todo => { 
             // using props in child component and looping
             return (
                 <View key={todo}
                 style={{display:'flex',flexDirection:'column',height:hp(20),width:wp(95),alignSelf:'center',justifyContent:'space-between'}}>
                 <Text style={{color:'#F7F7F7',fontSize:22,fontWeight:'bold'}}>
                                        {todo}
                                    </Text>
                                    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <Icon2 name="menu-open" style={{marginBottom:hp(2)}} size={40} color="#4F5356" />
                                    <FlatList 
                         
                         data={DATA}
                         horizontal={true}
                         
                         keyExtractor={item => item.id}
                         renderItem={({item}) => {
                           return (
                               
                               <View style={{backgroundColor:'#1B1D21',width:wp(36),height:hp(14),alignSelf:'center',marginHorizontal:wp(2),display:'flex',flexDirection:'column',borderRadius:10,elevation:1}}>
               
                               <View style={{display:'flex',flexDirection:'row',width:wp(30),height:hp(5),alignSelf:'center',marginTop:hp(1.5)}}>
                              <Text style={{fontSize:11,color:'#84858A',width:wp(24)}}>
                                  {item.title}
                              </Text>
                              <Icon2 name="star" style={{marginTop:hp(1)}} size={20} color="#EBC95B" />
               </View>
               <View style={{display:'flex',flexDirection:'row',width:wp(30),height:hp(8),alignSelf:'center',paddingHorizontal:wp(1),paddingBottom:hp(1)}}>
               <Image
                       style={{width:wp(18),height:hp(6),alignSelf:'center'}}
                        source={require('../assets/platinum.png')}
                      />
                      <View style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:wp(2)}}>
                      <Text style={{fontSize:20,color:'#DFDFDF',fontWeight:'bold'}}>
                      {item.rating}
                              </Text>
                              <Text style={{fontSize:10,color:'#DFDFDF'}}>
                              {item.percentage}
                              </Text>
                      </View>
               </View>
                               </View>
                               )
                           }}/>
               
                      
               
                                    </View>
                 </View>
                 
             )
         })}
         </ScrollView>: <View style={{alignSelf:'center',marginTop:'50%'}}>
       <ActivityIndicator size="large" color="white" />
      </View>
         }
            
        </View>
       
    )
}

export default Datalist
