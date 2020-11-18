import React from 'react';
import image from '../../Image/icone.png'
//Import all required component
import { View, Image, TouchableOpacity } from 'react-native';

const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
      <Image
          source={image}
          style={{ width: 35, height: 35, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;