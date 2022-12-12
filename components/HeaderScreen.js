/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {FONTS} from '../constants';

const HeaderScreen = ({
  containerStyle,
  title,
  menuComponent,
  logoComponent,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>

      {menuComponent}

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>

      {logoComponent}
    </View>
  );
};

export default HeaderScreen;
