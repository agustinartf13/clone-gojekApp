import React from 'react';
import {View, Image, Text} from 'react-native';


const MainFiture = (props) => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
      <View
        style={{ width: 59,
          height: 59,
          borderWidth: 1,
          borderColor: '#efefef',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontWeight: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFiture;