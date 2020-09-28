import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';


// import componet molecules
import SearchFiture from '../../../components/molecules/searchFiture';
import GoNews from '../../../components/molecules/goNews';
import GoInfo from '../../../components/molecules/goInfo';
import GoPromo from '../../../components/molecules/goPromo';

// import componet container/organisme
import ScrollAbleProducts from '../../organisme/scrollAbleProducts';
import NavBar from '../../organisme/navBar';
import HomeMainFiture from '../../organisme/homeMainFiture';
import HomeGoPay from '../../organisme/homeGoPay';

class Home extends Component {
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
            imgGoNews={require('../../../assets/dummy/sepak-bola.jpg')}
            titleBola="Dimas Derajat Selamatkan penalti, Timnas U-23 kalahkan Brunei"
            textBtn="Read" onPress={() => this.props.navigation.navigate('NewsDetail')}
          />

          {/* Internal Information Section */}
          <GoInfo
            headTitle="Complate Your Profile"
            title="Connect with Facebook"
            deskripsi="Login faster without verification code"
            img={require('../../../assets/dummy/facebook-connect.png')}
            textBtn="CONNECT"
          />

          {/* Go Food Banner Section */}
          <GoPromo
            titlePromo="Free GO-FOOD Voucher"
            deskripsi="Quick, before they run out!"
            imgPromo={require('../../../assets/dummy/food-banner.jpg')}
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

export default Home;