import { Text, View, Image } from 'react-native';
import { IconStyles } from './IconStyles';
 
export default function Icon() {
  return (
<View style={IconStyles.container}>      
<Image style={IconStyles.logo} source={require('../../assets/snack-icon.png')} />
<Text style={IconStyles.paragraph}>
        MEU APP
</Text>
</View>
  );
}
 
