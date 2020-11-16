import React from 'react';
import { View } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, Text } from 'react-native-gesture-handler';


const HomeScreen = () => {
  //const [date, setdate] = useState([])
  const [objJson, setobjJson] = useState({})
  const getDateArray = function(start, end) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

  /*{function dayDiff(d1, d2) {
    d1 = d1.getTime() / 86400000;
    d2 = d2.getTime() / 86400000;
    return new Number(d2 - d1).toFixed(0);
  }*/

  //function to handle the date change

  useEffect(() => {
    fetch('http://192.168.0.3:3100/customers/getreservation')
      .then(response => response.json())
      .then(data => {


        data.data.forEach(element => {
          objJson[element["chekin"]] = { startingDay: true, marked: true, dotColor: '#50cebb', color: '#F91919' }
          objJson[element["chekout"]] = { endingDay: true, marked: true, dotColor: '#50cebb', color: '#F91919' }
         

        }

        );

        setobjJson(objJson)
        //setdate(response.json()), [date]}
        console.log(objJson)
        //getDateArray(element["chekin"], element["chekout"])


      })


  })




  return <View style={{ flex: 1 }}>
    <Calendar
      markingType={'period'}
      markedDates={objJson}
    //selectFrom={"chekin"}
    //selectTo={"chekout"}

    />



  </View>;

};

export default HomeScreen;