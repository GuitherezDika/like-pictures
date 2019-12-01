import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import PictureCounter from '../screens/PictureCounter';

const SquareScreen = () => {
   const [sunRise, setSunRise] = useState(0);
   const [bridgeOnSea, setBridgeOnSea] = useState(0);
   const [mountain, setMountain] = useState(0);

   return (
      <View>
         <PictureCounter 
            onIncrease={()=> setSunRise(sunRise + 1)}
            onDecrease={()=> setSunRise(sunRise - 1)}
            title='sunRise' 
            imgsource=
            {require(
               '../../assets/gambar1.jpg'
            )}
         />
         <PictureCounter 
            onDecrease={()=> setBridgeOnSea(bridgeOnSea - 1)} 
            onIncrease={()=> setBridgeOnSea(bridgeOnSea + 1)} 
            title='bridgeOnSea' 
            imgsource={require('../../assets/gambar2.jpg')}
         />
         <PictureCounter  
            onDecrease={()=> setMountain(mountain - 1)} 
            onIncrease={()=> setMountain(mountain + 1)}
            title='mountain' 
            imgsource={require('../../assets/gambar3.jpg')}
         />

      </View>
   );
};

const styles = StyleSheet.create ({

});

export default SquareScreen;