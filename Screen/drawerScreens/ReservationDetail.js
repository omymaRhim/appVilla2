import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useAppContext } from '../../AppContext';
import image from '../../Image/retour.png'

const DetailItem =({label,value})=>{
    return  <View style={{flexDirection:"row",padding:10,borderBottomWidth:1,borderColor:"#ddd"}}>
    <Text style={styles.tilte}>{label} :</Text>
     <Text style={styles.subTitle}>{value  }</Text> 
  </View>
}

export default function ReservationDetail(props) {
    const {reservation,currentUser} =useAppContext();
    console.log({currentUser});
    
   
 
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF50' }}>
    
     <TouchableOpacity onPress={() =>  props.navigation.navigate('NosReservation')}>
     {/*<Image
          source={image}
          style={{ width: 35, height: 35, marginLeft: 5 }}
     />*/}
     
     </TouchableOpacity>
     
     <View style={styles.container}>
      <DetailItem label="Nom" value={reservation?.lastname} />
      <DetailItem label="Prénom" value={reservation?.firstname} />
      <DetailItem label="Email" value={reservation?.email} />
      <DetailItem label="Tel" value={reservation?.tel} />
      <DetailItem label="Logement" value={reservation?.logement} />
      <DetailItem label="Nbre de personnes" value={reservation?.nbrepersonne} />
      <DetailItem label="chekin" value={reservation?.chekin} />
      <DetailItem label="chekout" value={reservation?.chekout} />
      <DetailItem label="Prix" value={reservation?.price} />
      <DetailItem label="Avance" value={reservation?.avance} />
      <DetailItem label="Avance Complémentaire" value={reservation?.avanceC} />
      <DetailItem label="Autre détail" value={reservation?.detail} />
      <DetailItem label="Commercial" value={currentUser?.name} />
      </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 12,
    marginLeft:10
  },
  headerStyle: {
    //backgroundColor: '#ffffff',
    
  },

});
