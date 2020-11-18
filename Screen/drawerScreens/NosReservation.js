import React from 'react';
import {NavigationActions} from 'react-navigation';
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
import {useState, useEffect} from 'react';
import {BASE_URL} from '../utils/Constant';
import { useAppContext } from '../../AppContext';

const ResevationItem = ({_id, lastname, firstname, email,navigation,...others}) => {
  const {setReservation} =useAppContext();
  const style = {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  };
  function navigate(){
    setReservation({lastname,firstname,email,...others})
    navigation.navigate("ReservationDetail")
  }
  return (
    <View style={styles.reservationItemContainer}>
      <View>
        <Text>{lastname}</Text>
        <Text>{firstname}</Text>
        <Text>{email}</Text>
      </View>
      <TouchableOpacity onPress={navigate}>
        <View style={style}>
          <Text>Voir plus</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const NosReservation = ({navigation}) => {
  const [objJson, setobjJson] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + '/customers/find')
      .then((response) => response.json())
      .then((data) => {
        setobjJson(data?.data);
      })

      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {objJson?.map((item) => {
          console.log({item});

          return <ResevationItem {...item} navigation={navigation}/>;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  reservationItemContainer: {
    elevation: 1,
    backgroundColor: '#f1f1f1',
    height: 100,
    marginTop: 5,
    padding: 5,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
  contact: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'grey',
    marginBottom: 10,
  },
  contactName: {
    fontWeight: '600',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    marginRight: 10,
  },
});

export default NosReservation;
