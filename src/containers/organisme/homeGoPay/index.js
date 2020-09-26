import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFiture from '../../../components/molecules/goPayFiture';

class HomeGoPay extends Component {
  render() {
    return (
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
          <Image source={require('../../../assets/icon/gopay.png')} />
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
          <GopayFiture title="Pay" img={require('../../../assets/icon/pay.png')} />
          <GopayFiture
            title="Nearby"
            img={require('../../../assets/icon/nearby.png')}
          />
          <GopayFiture
            title="Top Up"
            img={require('../../../assets/icon/topup.png')}
          />
          <GopayFiture
            title="More"
            img={require('../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeGoPay;
