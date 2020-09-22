import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';

{
  /* call icon */
}
import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';

{
  /* call fiture gopay dinamic */
}
const GopayFiture = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={props.img} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
          {/* Search bar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}
              />
              <Image
                source={require('./src/assets/icon/search.png')}
                style={{position: 'absolute', top: 6, left: 12}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./src/assets/icon/promo.png')} />
            </View>
          </View>

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
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-ride.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-car.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./src/assets/icon/go-bluebird.png')}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-send.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-deals.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-pulsa.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-food.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 59,
                    height: 59,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./src/assets/icon/go-more.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}
          />

          {/* New Section */}
          <View style={{paddingTop: 16, marginHorizontal: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./src/assets/dummy/sepak-bola.jpg')}
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
                  opacity: 0.3,
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
                  source={require('./src/assets/logo/white.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#e8e9ed',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
                GO-NEWS
              </Text>
              <Text
                style={{
                  fontWeight: 14,
                  fontWeight: 'normal',
                  color: '#7a7a7a',
                  marginBottom: 11,
                }}>
                Dimas Derajat Selamatkan penalti, Timnas U-23 kalahkan Brunei
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#61A756',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  alignSelf: 'flex-end',
                  borderRadius: 4,
                }}>
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Internal Information Section */}
          <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{width: 55, height: 15, marginLeft: -3}}>
              <Image
                source={require('./src/assets/logo/gojek.png')}
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
              Complate Your Profile
            </Text>
            <View style={{flexDirection: 'row', marginBottom: 16}}>
              <View>
                <Image
                  source={require('./src/assets/dummy/facebook-connect.png')}
                  width="50px"
                />
              </View>
              <View style={{marginLeft: 16, flex: 1}}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>
                  Connect with Facebook
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    color: '#4a4a4a',
                    width: '70%',
                  }}>
                  Login faster without verification code
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
                CONNECT
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

          {/* Go Food Banner Section */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./src/assets/dummy/food-banner.jpg')}
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
                  source={require('./src/assets/logo/white.png')}
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
                    Free GO-FOOD Voucher
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
                    Quick, before they run out!
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

          {/* Nearby Go-food Section */}
          <View>
            <View style={{width: 55, height: 15, marginLeft: 16}}>
              <Image
                source={require('./src/assets/logo/go-food.png')}
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
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>
                Nearby Restaurant
              </Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>
                See All
              </Text>
            </View>
            <ScrollView
              horizontal
              style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 16}}>
                <View style={{height: 150, width: 150}}>
                  <Image
                    source={require('./src/assets/dummy/go-food-kfc.jpg')}
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
                    source={require('./src/assets/dummy/go-food-gm.jpg')}
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
                    source={require('./src/assets/dummy/go-food-orins.jpg')}
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
                    source={require('./src/assets/dummy/go-food-banka.jpg')}
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
                    source={require('./src/assets/dummy/go-food-pak-boss.jpg')}
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
