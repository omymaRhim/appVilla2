import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import ReservationScreen from './drawerScreens/ReservationScreen';
import Reservationdone from './drawerScreens/Reservationdone';
import NosReservation from './drawerScreens/NosReservation';

import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';


const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#007a02',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ReservationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Reservation Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#007a02',
      },
      headerTintColor: '#fff',
    }),
  },
});
const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Reservationdone,
    navigationOptions: ({ navigation }) => ({
      title: 'Reservation done',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#007a02',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FourActivity_StackNavigator = createStackNavigator({
  First: {
    screen: NosReservation,
    navigationOptions: ({ navigation }) => ({
      title: 'Nos Réservation',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#007a02',
      },
      headerTintColor: '#fff',
    }),
  },
});




const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    ReservationScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Reservation Screen',
      },
    },
    Reservationdone: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Reservation done ',
      },
    },
    NosReservation: {
      screen: FourActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Nos Réservation ',
      },
    },
   
    
  
    
  },
  
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;