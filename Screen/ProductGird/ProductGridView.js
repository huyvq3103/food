import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import GridItem from './GridItem';
function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      url: 'https://onewaymobile.vn/images/products/2022/12/24/large/13-pro-xanh-la_1671847593.png',
      price: 75,
      productName: 'Iphone 15',
      specifications: ['Dry clean', 'cyclone ', 'cord storage'],
      reviews: 19,
      stars: 3,
    },
    {
      url: 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/3/_/3_51_2_1.jpg',
      price: 88,
      productName: 'Iphone 13Promax',
      specifications: ['Dry clean'],
      reviews: 60,
      stars: 5,
    },
    {
      url: 'https://bizweb.dktcdn.net/100/116/615/products/refurb-iphone-13-pro-max-graphite-2023-jpeg.jpg?v=1680336506177',
      price: 100,
      productName: 'Iphone 14 promax',
      specifications: [
        'Dry clean',
        'cyclone filteer',
        'convenience cord storage',
      ],
      reviews: 90,
      stars: 4,
    },
    {
      url: 'https://ishoppro.vn/wp-content/uploads/2021/10/apple-iphone-13-5g-128gb-vn-a-01631653903.png',
      price: 781,
      productName: 'Iphone 13 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 2,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop_BDzyCRDPkwltd8u8Wcb3GoGqxkIbShv8EPmbOnmLWyvoMrN0-xu0hneLZzN5pPx_Q&usqp=CAU',
      price: 40,
      productName: 'Iphone 11 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 5,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuSK18HmtQ1oJaugGrnxsHvUZ3rLke09w0zN0QupjniGVwgTmrxVBsEOQb1nwbpC7hYk&usqp=CAU',
      price: 20,
      productName: 'Iphone 10 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 5,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujbgsip_-kkpDfS2Lh8IAovv61RpkAiRauVOjmXSvL0FUfDsX5deYfnIeDiN8VV5s4_4&usqp=CAU',
      price: 40,
      productName: 'Iphone 13 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 1,
    },
    {
      url: 'https://ishoppro.vn/wp-content/uploads/2021/10/apple-iphone-13-5g-128gb-vn-a-01631653903.png',
      price: 40,
      productName: 'Iphone 13 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 5,
    },
    {
      url: 'https://ishoppro.vn/wp-content/uploads/2021/10/apple-iphone-13-5g-128gb-vn-a-01631653903.png',
      price: 40,
      productName: 'Iphone 13 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 3,
    },
    {
      url: 'https://ishoppro.vn/wp-content/uploads/2021/10/apple-iphone-13-5g-128gb-vn-a-01631653903.png',
      price: 40,
      productName: 'Iphone 13 ',
      specifications: ['cyclone filteer', 'convenience cord storage'],
      reviews: 110,
      stars: 2,
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        // keyExtractor={item => item.productName}
        renderItem={({item, index}) => (
          <GridItem
            item={item}
            index={index}
            onPress={() => {
              let clonedProducts = products.map(eachProduct => {
                if (item.productName == eachProduct.productName) {
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == false ||
                      eachProduct.isSaved == undefined
                        ? true
                        : false,
                  };
                }

                return eachProduct;
              });
              setProducts(clonedProducts);
            }}
          />
        )}
      />
    </View>
  );
}

export default ProductGridView;
