import React, {Component} from 'react';
import {View} from 'react-native';
import MainFiture from '../../../components/molecules/mainFiture';

class HomeMainFiture extends Component {
  render() {
    return (
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
            img={require('../../../assets/icon/go-ride.png')}
          />
          <MainFiture
            title="GO-CAR"
            img={require('../../../assets/icon/go-car.png')}
          />
          <MainFiture
            title="GO-BLUEBIRD"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <MainFiture
            title="GO-SEND"
            img={require('../../../assets/icon/go-send.png')}
          />
          <MainFiture
            title="GO-DEALS"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <MainFiture
            title="GO-PULSA"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <MainFiture
            title="GO-FOOD"
            img={require('../../../assets/icon/go-food.png')}
          />
          <MainFiture
            title="MORE"
            img={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

export default HomeMainFiture;
