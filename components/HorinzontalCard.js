/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../constants';


const HorinzontalCard = ({containerStyle, imageStyle, item, onPress}) => {
return (
    <TouchableOpacity
    style={{
        flexDirection:'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle
    }}
    >
        <Image
        source={item.image}
        style={imageStyle}
        />

        <View
        style={{
            flex:1
        }}
        >
            <Text style={{ ...FONTS.h3, fontSize:17}}>{item.name}</Text>
            <Text style={{color: COLORS.darkGray2, ...FONTS.darkGray2}}>{item.description}</Text>
            <Text style={{marginTop: SIZES.base, ...FONTS.h2}}>R${item.price}</Text>
        </View>

        <View 
        style={{
            flexDirection:'row',
            position:'absolute',
            top:5,
            right:SIZES.radius
        }}
        >
            <Image
            source={icons.calories}
            style={{
                width:30,
                height:30
            }}
            />
            <Text
            style={{
                color:COLORS.darkGray2, ...FONTS.body5
            }}
            >{item.calories} kcal</Text>

        </View>
    </TouchableOpacity>

)
}

export default HorinzontalCard;