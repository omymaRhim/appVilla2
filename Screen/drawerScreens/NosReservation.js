import React from 'react';
import {NavigationActions} from 'react-navigation';
import DatePicker from 'react-native-datepicker';
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
import {useAppContext} from '../../AppContext';

const ResevationItem = ({
  _id,
  lastname,
  firstname,
  email,
  navigation,
  ...others
}) => {
  const {setReservation} = useAppContext();
  const style = {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  };
  function navigate() {
    setReservation({lastname, firstname, email, ...others});
    navigation.navigate('ReservationDetail');
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
  const [date1, setDate] = React.useState(null);
 
  function handleChangDate(d) {
    setDate(d);
  }
  function fetchReservation() {
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
  }
  useEffect(() => {
    fetchReservation();
  }, []);
  const datePickerStyle = {
    width: 250,
    marginTop: 15,
    //borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
  };

  let res = objJson;
  if (date1) {
    res = objJson.filter((res) => {
      return String(res?.chekin) === String(date1);
    });
  }
  

  return (
    <View style={styles.container}>
     
      <View>
        <DatePicker
          style={styles.datePickerStyle}
          date={date1} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          value={date1}
          //minDate="01-01-2016"
          //maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date1) => {
            handleChangDate(date1);
            console.log({date1});
          }}
        />
      </View>
      
      <ScrollView>
        {res?.map((item) => {
          console.log({item});

          return <ResevationItem {...item} navigation={navigation} />;
        })}
      </ScrollView>
   
    </View>
  );
};
//
const styles = StyleSheet.create({
  reservationItemContainer: {
    elevation: 1,
    backgroundColor: '#f1f1f1',
    height: 100,
    marginTop: 15,
    padding: 15,
  },
  container: {
    flex: 1,
    //flexDirection: 'row',
    padding: 10,
    //justifyContent: 'space-between',
    //alignItems: 'center',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 15,
    //borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
   
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
