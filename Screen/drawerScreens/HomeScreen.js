import React from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/Constant';
import image1 from '../../Image/Villa1.png'
import image2 from '../../Image/Villa2.png'
import image3 from '../../Image/Cabane.png'



const Home = ({navigation}) => {
  const DetailItem =({label,value})=>{
    return  <View >
    <Text style={styles.tilte}>{label} :</Text>
     <Text style={styles.subTitle}>{value  }</Text> 
  </View>
  }
  function navigate(){
    navigation.navigate("HomeScreen")
  }
  const [objJson, setobjJson] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + '/customers/getLogement')
      .then((response) => response.json())
      .then((data) => {

        console.log("data",data.data)
        setobjJson(data.data);
      })

      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  }, );
 
  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#FFFFFF50' ,padding:5,borderBottomWidth:1}}> 
    
      <DetailItem label="Logement" value="Villa1" />
      <DetailItem label="Description" value="Description" />
      <Image
        source={image1}
        style={{height: 150, resizeMode: "center",height:100,width: 600,  }}
      />
       <TouchableOpacity onPress={navigate}>
        <View>
          <Text>Voir Calendrier</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, backgroundColor: '#FFFFFF50' ,padding:5,borderBottomWidth:1}}> 
    
      <DetailItem label="Logement" value="Villa2" />
      <DetailItem label="Description" value="Description" />
      <Image
        source={image2}
        style={{height: 150, resizeMode: "center",height:150,width: 600,  }}
      />
      <TouchableOpacity onPress={navigate}>
        <View>
          <Text>Voir Calendrier</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, backgroundColor: '#FFFFFF50' ,padding:5,borderBottomWidth:1}}> 
    
      <DetailItem label="Logement" value="Cabane" />
      <DetailItem label="Description" value="Description" />
      <Image
        source={image3}
        style={{height: 150, resizeMode: "center",height:100,width: 600,  }}
      />
      <TouchableOpacity onPress={navigate}>
        <View>
          <Text>Voir Calendrier</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      padding: 10,
    },
    
    title: {
      fontSize: 14,
    },
    subTitle: {
      fontSize: 12,
      marginLeft:10
    },
    headerStyle: {
      backgroundColor: '#ffffff',
      
    },
})
export default Home;