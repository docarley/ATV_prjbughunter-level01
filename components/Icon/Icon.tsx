import { Text, View, Image } from 'react-native';
import snackIcon from '../../assets/snack-icon.png';
import { iconstyle } from './IconStyle';

export default function Icon() {
  return (
    <View style={iconstyle.container}>      
      <Image source={snackIcon} style={iconstyle.logo} />
      <Text style={iconstyle.paragraph}>
        MEU APP
      </Text>
    </View>
  );
}


