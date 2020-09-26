import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

// import componet molecules
import GopayFiture from './src/components/molecules/goPayFiture';
import MainFiture from './src/components/molecules/mainFiture';
import SearchFiture from './src/components/molecules/searchFiture';
import GoNews from './src/components/molecules/goNews';
import GoInfo from './src/components/molecules/goInfo';
import GoPromo from './src/components/molecules/goPromo';

// import componet container/organisme
import ScrollAbleProducts from './src/containers/organisme/scrollAbleProducts';
import NavBar from './src/containers/organisme/navBar';
import HomeMainFiture from './src/containers/organisme/homeMainFiture';
import HomeGoPay from './src/containers/organisme/homeGoPay';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
          {/* Search bar */}
          <SearchFiture />

          {/* gopay */}
          <HomeGoPay />

          {/* main feature */}
          <HomeMainFiture />

          <View
            style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}
          />

          {/* New Section */}
          <GoNews
            imgGoNews={require('./src/assets/dummy/sepak-bola.jpg')}
            titleBola="Dimas Derajat Selamatkan penalti, Timnas U-23 kalahkan Brunei"
            textBtn="Read"
          />

          {/* Internal Information Section */}
          <GoInfo
            headTitle="Complate Your Profile"
            title="Connect with Facebook"
            deskripsi="Login faster without verification code"
            img={require('./src/assets/dummy/facebook-connect.png')}
            textBtn="CONNECT"
          />

          {/* Go Food Banner Section */}
          <GoPromo
            titlePromo="Free GO-FOOD Voucher"
            deskripsi="Quick, before they run out!"
            imgPromo={require('./src/assets/dummy/food-banner.jpg')}
          />

          {/* Nearby Go-food Section */}
          <ScrollAbleProducts />
        </ScrollView>
        {/* navbar */}
        <NavBar />
      </View>
    );
  }
}
