import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,

} from 'react-native';

// import componet molecules
import GopayFiture from './src/components/molecules/goPayFiture';
import MainFiture from './src/components/molecules/mainFiture';
import SearchFiture from './src/components/molecules/searchFiture';
import GoNews from './src/components/molecules/goNews';

// import icon gopay
import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';
import GoInfo from './src/components/molecules/goInfo';
import GoPromo from './src/components/molecules/goPromo';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
          {/* Search bar */}
          <SearchFiture />
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                padding: 14,
              }}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp 50.375
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2f65bd',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              {/* call fiture gopay dinamic */}
              <GopayFiture
                title="Pay"
                img={require('./src/assets/icon/pay.png')}
              />
              <GopayFiture
                title="Nearby"
                img={require('./src/assets/icon/nearby.png')}
              />
              <GopayFiture
                title="Top Up"
                img={require('./src/assets/icon/topup.png')}
              />
              <GopayFiture
                title="More"
                img={require('./src/assets/icon/more.png')}
              />
            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
              }}>
              <MainFiture
                title="GO-RIDER"
                img={require('./src/assets/icon/go-ride.png')}
              />
              <MainFiture
                title="GO-CAR"
                img={require('./src/assets/icon/go-car.png')}
              />
              <MainFiture
                title="GO-BLUEBIRD"
                img={require('./src/assets/icon/go-bluebird.png')}
              />
              <MainFiture
                title="GO-SEND"
                img={require('./src/assets/icon/go-send.png')}
              />
              <MainFiture
                title="GO-DEALS"
                img={require('./src/assets/icon/go-deals.png')}
              />
              <MainFiture
                title="GO-PULSA"
                img={require('./src/assets/icon/go-pulsa.png')}
              />
              <MainFiture
                title="GO-FOOD"
                img={require('./src/assets/icon/go-food.png')}
              />
              <MainFiture
                title="MORE"
                img={require('./src/assets/icon/go-more.png')}
              />
            </View>
          </View>
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
        </ScrollView>

        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 26, width: 26}} source={iconHome} />
            <Text style={{fontSize: 10, color: '#43ab4a', marginTop: 4}}>
              Home
            </Text>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 26, width: 26}} source={iconOrder} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 26, width: 26}} source={iconHelp} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 26, width: 26}} source={iconInbox} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 26, width: 26}} source={iconAccount} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({});
