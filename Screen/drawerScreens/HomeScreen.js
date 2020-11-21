import React from 'react';
import {View} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
import {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native-gesture-handler';
import {BASE_URL} from '../utils/Constant';
import * as lodash from 'lodash';
import moment from 'moment';
const HomeScreen = () => {
  //const [date, setdate] = useState([])
  const [objJson, setobjJson] = useState(null);
  function getDates(startDate, endDate) {
    var dates = [],
      currentDate = startDate,
      addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

    while (currentDate <= endDate) {
      dates.push(currentDate);
      console.log({currentDate});
      currentDate = addDays.call(currentDate, 1);
    }

    return dates;
  }

  function transformDate(date) {
    const [day, month, year] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  useEffect(() => {
    fetch(BASE_URL + '/customers/getreservation')
      .then((response) => response.json())
      .then((data) => {
        let reservationsDates = data?.data?.map((res) => {
          return {
            start: res?.chekin?.split('-')?.reverse()?.join('-'),//11-11-2020 -> 2020-11-11
            end: res?.chekout?.split('-')?.reverse()?.join('-'),
          };
        });
        let allDates = reservationsDates
          ?.map((item) => {
            return getDates(
              transformDate(item?.start),
              transformDate(item?.end),
            );
          })
          ?.map((item) => item);

        allDates = lodash
          .flatten(allDates)
          ?.map((item) => moment(item).format('YYYY-MM-DD'));
        let finalDatesCalandar = allDates?.map((item) => {
          return {
            [item]: {
              disabled: true,
              marked: true,
              color: 'red',
              selectedColor: '#000',
            },
          };
        });
        let obj = {};
        finalDatesCalandar?.forEach((item) => {
          obj = {...obj, ...item};
        });

        setobjJson(obj);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Calendar
        markingType={'period'}
        markedDates={{...objJson}}
       
      />
    </View>
  );
};

export default HomeScreen;
