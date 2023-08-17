import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import FiveStars from './FiveStars';

const GridItem = ({index, item, onPress}) => {
  return (
    <View
      style={{
        flex: 0.5,
        borderRadius: 20,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: colors.inactive,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            width: 70,
            height: 90,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: item.url,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            flex: 1,
            textAlign: 'right',
          }}>
          $ {item.price}
        </Text>
      </View>
      <Text
        style={{
          color: colors.primary,
          fontSize: 14,
          fontWeight: 'bold',
          marginHorizontal: 10,
          marginTop: 5,
        }}>
        {item.productName}
      </Text>
      {item.specifications.map(specifications => (
        <Text
          key={specifications}
          style={{
            color: 'black',
            fontSize: 12,
            paddingHorizontal: 5,
            paddingBottom: 10,
          }}>
          * {specifications}
        </Text>
      ))}
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={onPress}>
          <Icon
            name="heart"
            size={22}
            color={
              item.isSaved == undefined || item.isSaved == false
                ? colors.inactive
                : 'red'
            }
          />
          <Text
            style={{
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.inactive
                  : 'red',
              fontSize: 12,
              width: 60,
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
          }}>
          <FiveStars numberOfStars={item.stars} />
          <Text
            style={{
              color: colors.success,
              fontSize: 12,
              textAlign: 'right',
            }}>
            {item.reviews} review
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GridItem;
