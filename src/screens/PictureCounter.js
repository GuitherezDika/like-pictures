import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import SquareScreen from '../components/SquareScreen';

const PictureCounter = ({imgsource, onDecrease, onIncrease, title}) => {
   return (
      <View>
         {/* <Text>{title}</Text> */}
         <Image style={styles.gambar} source={imgsource}/>
         <Button onPress={() => onIncrease()}  title='Like' />
         <Button onPress={() => onDecrease()}  title='Dislike' />

      </View>
   )
};

const styles = StyleSheet.create ({
   gambar: {
      width: 250,
      height: 160,
      marginTop: 10,
   }
});

export default PictureCounter;