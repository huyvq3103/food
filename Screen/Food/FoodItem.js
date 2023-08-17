import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import colors from '../../constants/colors';

function _getColorFromState(status) {
  if (status.toLowerCase().trim() === 'opening soon') {
    return 'rgb(7, 161, 79)';
  } else if (status.toLowerCase().trim() === 'closing soon') {
    return 'rgb(236,69,90)';
  } else if (status.toLowerCase().trim() === 'comming soon') {
    return 'rgb(255,177,0)';
  }
  return colors.warning;
}

function FoodItem(props) {
  let {name, price, socialNetworks, status, url, website} = props.food;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,

        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: url,
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.inactive,
              fontSize: 12,
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: _getColorFromState(status),
              fontSize: 12,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            color: colors.inactive,
            fontSize: 12,
          }}>
          Price: {price}$
        </Text>
        <Text
          style={{
            color: colors.inactive,
            fontSize: 12,
          }}>
          Food Type: Pizza
        </Text>
        <Text
          style={{
            color: colors.inactive,
            fontSize: 12,
          }}>
          Website: {website}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {socialNetworks['facebook'] !== undefined && (
            <Icon
              name="facebook"
              style={{paddingEnd: 5}}
              size={20}
              color={colors.inactive}
            />
          )}
          {socialNetworks['twitter'] !== undefined && (
            <Icon
              name="twitter"
              style={{paddingEnd: 5}}
              size={20}
              color={colors.inactive}
            />
          )}

          {socialNetworks['instagram'] !== undefined && (
            <Icon
              name="instagram"
              style={{paddingEnd: 5}}
              size={20}
              color={colors.inactive}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
