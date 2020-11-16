import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, Button, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { useState, useEffect } from "react";

const NosReservation = () => {
    const [objJson, setobjJson] = useState({})
    useEffect(() => {
        fetch('http://192.168.0.3:3100/customers/find')
          .then(response => response.json())
          .then(data => {


            data.data.forEach(element => {
              objJson[element["FirstName"]]=
              objJson[element["LastName"]] 
              objJson[element["Email"]] 
             
    
            }
    
            );
    
            setobjJson(objJson)
            console.log(objJson)
    
          })
        
          .catch(error => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          })
    
      })
     return(
       <View style={styles.container}></View>
     )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
        marginBottom: 10
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
})

export default NosReservation;