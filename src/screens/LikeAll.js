import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const LikeAll = () => {
   const landscapes= [
      {gambar: 'picture-1'},
      
      {gambar: 'picture-2'},
      {gambar: 'picture-3'}      
   ];

   return (
      <FlatList
         keyExtractor={callLandscape => callLandscape.gambar}
         data={landscapes} 
         renderItem={({item}) => {
            return <Text>{item.gambar}</Text>
         }}
      />
   )
}

const styles= StyleSheet.create ({

})

export default LikeAll; 