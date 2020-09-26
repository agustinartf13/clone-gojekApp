import React, {Component} from 'react';
import {View} from 'react-native';

import NavBarIcon from '../../../components/molecules/navBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon textIcon="Home" imgIconBar={require('../../../assets/icon/home-active.png')} active />
        <NavBarIcon textIcon="Orders" imgIconBar={require('../../../assets/icon/order.png')} />
        <NavBarIcon textIcon="Help" imgIconBar={require('../../../assets/icon/help.png')} />
        <NavBarIcon textIcon="Inbox" imgIconBar={require('../../../assets/icon/inbox.png')} />
        <NavBarIcon textIcon="Account" imgIconBar={require('../../../assets/icon/account.png')} />
      </View>
    );
  }
}

export default NavBar;