import { Text, View, Image } from 'react-native';
import {iconStyle} from './iconStyle';

export default function Icon() {
  return (
    <View style={iconStyle.container} accessible={true} accessibilityLabel="Ícone do aplicativo">
      <Image style={iconStyle.logo} source={require('../../assets/snack-icon.png')} />
      <Text style={iconStyle.paragraph}>
        MEU APP
      </Text>
    </View>
  );
}


