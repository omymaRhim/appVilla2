import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
import {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {BASE_URL} from '../utils/Constant';
import moment from 'moment';
import {useAppContext} from '../../AppContext';
const TabItem = ({title, value}) => {
  const {activeLangment,setActiveLangement} =useAppContext();
  const style = {
    padding: 10,
    borderBottomWidth: 4,
    borderColor: activeLangment ==value ? 'green' :"white",
  };
  return (
    <TouchableOpacity style={style} onPress={()=>setActiveLangement(value)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
const Tabs = () => {
  const arrayLangement = [
    {
      title: 'Villa 1',
      value: 'Villa 1',
    },
    {
      title: 'Villa 2',
      value: 'Villa 2',
    },
    {
      title: 'Cabane',
      value: 'Cabane',
    },
  ];
  const style = {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elebvation: 1,
  };
  return (
    <View style={style}>
      {arrayLangement?.map((item) => (
        <TabItem {...item} key={item.value} />
      ))}
    </View>
  );
};
const HomeScreen = () => {
  const {objJson} = useAppContext();
  return (
    <View style={{flex: 1}}>
      <Tabs />
      <Calendar markingType={'period'} markedDates={{...objJson}} />
    </View>
  );
};

export default HomeScreen;
