import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoInfo = (props) => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View style={{width: 55, height: 15, marginLeft: -3}}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 15,
          marginBottom: 20,
        }}>
        {props.headTitle}
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image
            source={props.img}
            width="50px"
          />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
           {props.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4a4a4a',
              width: '70%',
            }}>
            {props.deskripsi}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
          {props.textBtn}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginTop: 5,
        }}
      />
    </View>
  );
};

export default GoInfo;