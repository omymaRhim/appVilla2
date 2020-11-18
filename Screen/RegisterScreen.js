import React, { useState } from 'react';
import * as Constant from  "./utils/Constant" 

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import loader from './Components/loader';



const RegisterScreen = props => {
  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
  
     //Show Loader
     setLoading(true);
     {/*var dataToSend = {
       user_name: userName,
       user_email: userEmail,
       user_password: userPassword
     };
  
     var formBody = [];
     for (var key in dataToSend) {
       var encodedKey = encodeURIComponent(key);
       var encodedValue = encodeURIComponent(dataToSend[key]);
       formBody.push(encodedKey + '=' + encodedValue);
     }
     formBody = formBody.join('&');
    */}
     
    fetch(Constant.REGISTER_URL, {
       method: 'POST',
       //body: formBody,
       headers: {
         //Header Defination
         //'Accept': 'application/json',
         'Content-Type': 'application/json',
        
         
       },
       body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      })
       
     }) 
       .then(response => response.json())
       .then(responseJson => {
         //Hide Loader
         
         //setLoading(false);
         //console.log(responseJson);
         // If server response message same as Data Matched
         if (responseJson.status == "success") {
           setIsRegistraionSuccess(true);
           console.log('Registration Successful. Please Login to proceed');
         } else {
           alert("error")
           setErrortext('Registration Unsuccessful');
         }
       })
       .catch(error => {
         //Hide Loader
         setLoading(false);
         console.error(error);
       });
   };
     
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF50',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF50' }}>
      
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/logoverde.png')}
            style={{
              width: '100%',
              height: 150,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              placeholder="Enter Name"
              placeholderTextColor="#000000"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._emailinput && this._emailinput.focus()
             }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              ref={ref => {
                _emailinput = ref;
              }}
              returnKeyType="next"
              onSubmitEditing={() => this._passwordinput && this._password.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password" 
                placeholderTextColor="#000000"
                keyboardType="default"
                ref={ref => {
                  _passwordinput = ref;
                }}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
          
          
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#000000',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
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
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});