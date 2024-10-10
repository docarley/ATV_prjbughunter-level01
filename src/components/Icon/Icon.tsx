import React from 'react';
import { Text, View, Image } from 'react-native';
import SnackIcon from '../../../assets/snack-icon.png';
import {styles} from './IconStyle';

export default function Icon() {
  return (
    <View style={styles.container}>      
      <Image source={SnackIcon} style={styles.logo}/>
      <Text style={styles.paragraph}>
        MEU APP
      </Text>
    </View>
  );
}


