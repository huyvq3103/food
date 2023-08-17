import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import FoodItem from './FoodItem';

const FoodList = () => {
  const [foods, setFoods] = useState([
    {
      name: 'La Casa LemmentTango',
      status: 'Opening soon',
      url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
      price: 5221.15,
      website: 'http://edition.com',
      socialNetworks: {
        facebook: 'http://www.facebook.com/duynen123',
        twitter: 'http://twitter.com/huy',
        instagram: 'http://instagram.com/alex',
      },
    },
    {
      name: 'SuShi Fishe',
      url: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Lasagna-1024x536.png',
      status: 'Closing soon',
      price: 74584.2,
      website: 'http://edition.com',
      socialNetworks: {
        facebook: 'http://www.facebook.com/duynen123',

        instagram: 'http://instagram.com/alex',
      },
    },
    {
      name: 'Kingdom Bar',
      url: 'https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
      status: 'Comming soon',
      price: 5441.2,
      website: 'http://edition.com',
      socialNetworks: {
        instagram: 'http://instagram.com/alex',
      },
    },
    {
      name: 'LemmentTango Tango',
      url: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/03/Lasagna-1024x536.png',
      status: 'Opening soon',
      price: 1212.2,
      website: 'http://edition.com',
      socialNetworks: {
        facebook: 'http://www.facebook.com/duynen123',
        twitter: 'http://twitter.com/huy',
        instagram: 'http://instagram.com/alex',
      },
    },
    {
      name: 'Peller Valentine',
      url: 'https://fullsuitcase.com/wp-content/uploads/2020/06/Authentic-Italian-food-by-region.jpg.webp',
      status: 'Closing soon',
      price: 66996.3,
      website: 'http://edition.com',
      socialNetworks: {
        facebook: 'http://www.facebook.com/duynen123',
      },
    },
    {
      name: 'Asension Private',
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/210211140233-03-classic-italian-dishes.jpg?q=w_2512,h_1413,x_0,y_0,c_fill/w_1280',
      status: 'Opening soon',
      price: 66932.3,
      website: 'http://edition.com',
      socialNetworks: {
        instagram: 'http://instagram.com/alex',
      },
    },
    {
      name: 'Melody Bar Twitter Account',
      url: 'https://i.insider.com/5e15f84c49878c38226f6195?width=700',
      status: 'Closing soon',
      price: 333.3,
      website: 'http://edition.com',
      socialNetworks: {
        twitter: 'http://twitter.com/huy',
        instagram: 'http://instagram.com/alex',
      },
    },
  ]);
  const [category, setCategory] = useState([
    {
      name: 'BBQ',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KG12k4gwbA5Fq8Hz-BbOq1b3frzP7D5OzLaScWib7SyqTabmRz5sBumDD3CmKsXFFww&usqp=CAU',
    },
    {
      name: 'BreakFast',
      url: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035',
    },
    {
      name: 'Coffee',
      url: 'https://bonjourcoffee.vn/blog/wp-content/uploads/2020/01/cafe-latte.jpg',
    },
    {
      name: 'Noddles',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkT9AlzPcHCsg6E0Gbk1J7yfCW-PwPndm4a3tosqX80cIs4kQN4IKU1CI-kM2GSBvA5Fs&usqp=CAU',
    },
    {
      name: 'HotDog',
      url: 'https://api.bapi.com.vn/file.api/files/image/Original/2545f452-5ebd-4a17-8066-7ab1cd6fd74d',
    },
    {
      name: 'Dinner',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieOohfmCNh51bI0QDwysx4FNtcNsC-iEPy1upTz52_cnQYAJgArwYJ92HKP7MVKLki5E&usqp=CAU',
    },
    {
      name: 'Drink',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuDMlVino_ONTH51eJARlWXNHeUDugVMM-nn8uYKaRc-ZuyeTGZhGDmLaP4PW6Mm-UGI&usqp=CAU',
    },
    {
      name: 'Wine',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlVcislsgutXgnSZlYISM3BLeEmUu5MZegwTwv3TY48KECAKvDz8Tv619l-i405XC3UY&usqp=CAU',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const filteredFoods = () => {
    return foods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  };
  return (
    <View style={{style: 1, backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={15}
            color={'black'}
            style={{top: 12, left: 10, position: 'absolute'}}
          />

          <TextInput
            onChangeText={text => {
              setSearchText(text);
            }}
            autoCorrect={false}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              flex: 1,
              marginEnd: 8,
              borderRadius: 5,
              opacity: 0.5,
              paddingStart: 30,

              //   alignSelf: 'center',
            }}
          />
          <Icon name="bars" size={30} color={'black'} />
        </View>
        <View style={{height: 100}}>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <FlatList
            horizontal={true}
            data={category}
            style={{flex: 1}}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert(`press ${item.name}`);
                  }}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'cover',
                      borderRadius: 25,
                      margin: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}></FlatList>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
        </View>

        {
          <FlatList
            data={filteredFoods()}
            keyExtractor={eachFood => eachFood.name}
            renderItem={({item}) => {
              return (
                <FoodItem
                  onPress={() => {
                    alert(`You press item name:${item.name}`);
                  }}
                  food={item}
                  key={item.name}
                />
              );
            }}
          />
        }
      </View>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
