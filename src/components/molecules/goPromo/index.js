import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoPromo = (props) => {
  return (
    <View style={{padding: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.imgPromo}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.15,
            borderRadius: 6,
          }}
        />
        <View
          style={{
            width: 55,
            height: 15,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              {props.titlePromo}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              {props.deskripsi}
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'flex-end',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                FOOD VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

export default GoPromo;