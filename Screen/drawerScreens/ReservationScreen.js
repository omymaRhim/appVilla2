import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
//Import all required component
import { View, Text, Button, Platform, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { NavigationActions } from 'react-navigation';

import image from '../../Image/success.png';
import { BASE_URL } from '../utils/Constant';
import ColorPanel from 'react-native-color-panel';
import moment from 'moment';


//import moment from "moment";
//import { render } from 'react-dom';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const ReservationScreen = props => {
  let [userFirstName, setUserFirstName] = useState('');
  let [userLastName, setUserLastName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userTel, setUserTel] = useState('');
  let [userLogement, setUserLogement] = useState('');
  let [userNbreper, setUserNbreper] = useState('');
  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  //let [userChekin, setUserChekin] = useState('');
  //let [userChekout, setUserChekout] = useState('');
  let [userPrice, setUserPrice] = useState('');
  let [userAvance, setUserAvance] = useState('');
  let [userAvanceC, setUserAvanceC] = useState('');
  let [userDetail, setUserDetail] = useState('');
  let [errortext, setErrortext] = useState('');
  let [paid,setPaid] =useState(false);
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const initialState = {
    userFirstName: ""

  };

  const clearState = () => {
    setState({ ...initialState });
  };


  const handleSubmitButton = () => {
    setErrortext('');
    {/* if (!userFirstName) {
      alert("Merci d'entrez votre Prénom");
      return;
    }
    if (!userLastName) {
      alert("Merci d'entrez votre Nom");
      return;
    }
    if (!userEmail) {
      alert("Merci d'entrez votre Email");
      return;
    }
    if (!userLogement) {
      alert("Merci d'entrez Logement souhaité");
      return;
    }
    if (!userNbreper) {
      alert("Merci d'entrez le nombre de personnes");
      return;
    }
    if (!date) {
      alert("Merci d'ajoutez la date de Chekin ");
      return;
    }
    if (!date1) {
      alert("Merci d'ajoutez la date de Chekout");
      return;
    }
  */}


    fetch(BASE_URL + "/customers/create", {
      method: 'POST',
      //body: formBody,
      headers: {
        //Header Defination

        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        firstname: userFirstName,
        lastname: userLastName,
        email: userEmail,
        tel: userTel,
        logement: userLogement,
        nbrepersonne: userNbreper,
        chekin: date,
        chekout: date1,
        price: userPrice,
        avance: userAvance,
        paid:paid,
        avanceC: userAvanceC,
        detail: userDetail,
        

      })

    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        //clearState();
        setUserFirstName('');
        setUserLastName('');
        setUserEmail('');
        setUserTel('');
        setUserLogement('');
        setUserNbreper('');
        setDate('');
        setDate1('');
        setUserPrice('');
        setUserAvance('');
        setUserAvanceC('');
        setUserDetail('');


        //setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == "success") {
          setIsRegistraionSuccess(true);

          //setUserPrice('')
          props.navigation.navigate('Reservationdone')

          console.log('Réservation confirmée avec succés');
        } else {
          alert("error")
          setErrortext('error');
        }
      })
      .catch(error => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });

  };
  //if (isRegistraionSuccess) {
  //return (


  ///props.navigation.navigate('ReservationScreen')
  // props.navigation.navigate('Reservationdone')



  //);
  //}


  return (
    <ScrollView >
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userFirstName => setUserFirstName(userFirstName)}
          value={userFirstName}
          placeholder="Prénom"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userLastName => setUserLastName(userLastName)}
          value={userLastName}
          placeholder="Nom"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userEmail => setUserEmail(userEmail)}
          value={userEmail}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userTel => setUserTel(userTel)}
          value={userTel}
          placeholder="N°Tel"
          placeholderTextColor="#CCCCCC"
          dataDetectorTypes='phoneNumber'
          autoCapitalize="none"
          keyboardType="number-pad"
          returnKeyType="next"
        />
      </View>


      <View style={styles.inputStyl}>
        <RNPickerSelect
          placeholder={{ label: 'Type de Logement', value: 'Type logement' }}
          onValueChange={userLogement => setUserLogement(userLogement)}
          value={userLogement}
          items={[
            { label: 'Villa 1', value: 'Villa 1' },
            { label: 'Villa 2', value: 'Villa 2' },
            { label: 'Cabane', value: 'Cabane' },
            { label: 'All', value: 'All' },
          ]}
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userNbreper => setUserNbreper(userNbreper)}
          value={userNbreper}
          placeholder="Nbre de Personnes"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="number-pad"
          returnKeyType="next"
        />
      </View>

      
      
      


      <View style={styles.container}>
        <Text style={styles.title}>
          CheckIn :
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          value={date}
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
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          CheckOut :
        </Text>
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
            setDate1(date1);
            console.log(date1, date, userLogement, userAvance,userNbreper)
            var now = moment(date); //todays date
            var end = moment(date1); // another date
            var duration = moment.duration(now.diff(end));
            var days = duration.asDays();
            console.log(days)
            
            if (userLogement=="Villa 1"){
              prix=160*userNbreper*days
            }
            
            else if(userLogement=="Villa 2"){
              prix=120*userNbreper*days
            }
            
            else if(userLogement=="Cabane"){
              prix=200*userNbreper*days
            }
            
          console.log(prix)
            
          setUserPrice(Math.abs(prix)+"")
          var avance=prix*0.3
          console.log(avance)
          setUserAvance(Math.abs(avance)+"")

          }}
          
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          value={userPrice}
          placeholder="Prix"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
        />
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          //onChangeText={userAvance => setUserAvance(userAvance)}
          value={userAvance}
          placeholder="Avance 30%"
          placeholderTextColor="#CCCCCC"
          dataDetectorTypes='phoneNumber'
          autoCapitalize="none"
          keyboardType="number-pad"
          returnKeyType="next"
        />
      </View>
      <View style={styles.SectionStyle}>
      <BouncyCheckbox
        isChecked={paid}
        textColor="#000"
        fillColor="green"
        text="payée "
        onPress={(checked) => setPaid(checked)}
      />
      </View>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userAvanceC => setUserAvanceC(userAvanceC)}
          value={userAvanceC}
          placeholder="Avance complémentaire"
          placeholderTextColor="#CCCCCC"
          dataDetectorTypes='phoneNumber'
          autoCapitalize="none"
          keyboardType="number-pad"
          returnKeyType="next"
        />
      </View>



      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={userDetail => setUserDetail(userDetail)}
          value={userDetail}
          placeholder="Notes"
          placeholderTextColor="#CCCCCC"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
        />
      </View>

      {errortext != '' ? (
        <Text style={styles.errorTextStyle}> {errortext} </Text>
      ) : null}
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitButton}>
        <Text style={styles.buttonTextStyle}>Confirmer</Text>
      </TouchableOpacity>
    </ScrollView>

  );

};

const styles = StyleSheet.create({

  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    //borderRadius: 30,
    borderColor: 'black',
  },
  inputStyl: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    //borderRadius: 30,
    borderColor: 'black',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 20,
    height: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    padding: 10,
  },
  datePickerStyle: {
    width: 250,
    marginTop: 15,
    //borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#000000',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    //borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 16,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
})


export default ReservationScreen;