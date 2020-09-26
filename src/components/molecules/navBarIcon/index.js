import React from 'react';
import {View, Text, Image} from 'react-native';

const NavBarIcon = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{height: 26, width: 26}} source={props.imgIconBar} />
      <Text style={{fontSize: 10, color: '#545454', marginTop: 4, color: props.active ? '#43ab4a' : '#545454' }}>
        {props.textIcon}
      </Text>
    </View>
  );
};

export default NavBarIcon;
