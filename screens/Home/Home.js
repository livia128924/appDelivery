/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [menuList, setMenuList] = React.useState([]);

  React.useEffect(()=>{
        handleChangeCategory(selectedCategoryId, selectedMenuType)
  },[]);

  //handle

  function handleChangeCategory(categoryId, menuTypeId) {
    let selectedMenu = dummyData.menu.find(a =>a.id == menuTypeId)

    setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
  }

//render
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 45,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Pesquisar..."
        />

        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderSearch()}

      <FlatList
      data={menuList}
      
      keyExtractor={(item)=>`${item.id}`}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index})=>{
        return (
            <Text>
                {item.name}
            </Text>
        )
      }}
      />
    </View>
  );
};

export default Home;
