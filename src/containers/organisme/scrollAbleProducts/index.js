import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class ScrollAbleProducts extends Component {
  render() {
    return (
      <View>
        <View style={{width: 55, height: 15, marginLeft: 16}}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <View style={{marginRight: 16}}>
            <View style={{height: 150, width: 150}}>
              <Image
                source={require('../../../assets/dummy/go-food-kfc.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1c1c1c',
                marginTop: 12,
              }}>
              KFC Aeon Mall
            </Text>
          </View>

          <View style={{marginRight: 16}}>
            <View style={{height: 150, width: 150}}>
              <Image
                source={require('../../../assets/dummy/go-food-gm.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1c1c1c',
                marginTop: 12,
              }}>
              Bak Mie Aeon Mall
            </Text>
          </View>

          <View style={{marginRight: 16}}>
            <View style={{height: 150, width: 150}}>
              <Image
                source={require('../../../assets/dummy/go-food-orins.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1c1c1c',
                marginTop: 12,
              }}>
              Martabak Orin
            </Text>
          </View>

          <View style={{marginRight: 16}}>
            <View style={{height: 150, width: 150}}>
              <Image
                source={require('../../../assets/dummy/go-food-banka.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1c1c1c',
                marginTop: 12,
              }}>
              Martabak Banka
            </Text>
          </View>

          <View style={{marginRight: 16}}>
            <View style={{height: 150, width: 150}}>
              <Image
                source={require('../../../assets/dummy/go-food-pak-boss.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 8,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1c1c1c',
                marginTop: 12,
              }}>
              Ayam Pak Boss
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ScrollAbleProducts;