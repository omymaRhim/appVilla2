import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useAppContext } from '../../AppContext';

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
    <View style={styles.container}>

      <DetailItem label="Nom" value={reservation?.lastname} />
      <DetailItem label="Prénom" value={reservation?.firstname} />
      <DetailItem label="Email" value={reservation?.email} />
      <DetailItem label="Avance" value={reservation?.avance} />
      <DetailItem label="Logement" value={reservation?.logement} />
      <DetailItem label="chekin" value={reservation?.chekout} />
      <DetailItem label="chekout" value={reservation?.chekout} />
      <DetailItem label="Prix" value={reservation?.price} />
      <DetailItem label="Commerçant" value={currentUser?.name} />
    </View>
  );
}
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
});
