import { View, Text, Button } from 'react-native';
import Icon from '../../components/Icon/Icon';
import { HomeStyle } from './HomeStyle';

// or any files within the Snack
import TextBox from '../../components/TextBox/TextBox';

export default function Home() {
  return ( 
     <View style={HomeStyle.container}>
        <Icon/>
        <Text style={HomeStyle.text}>Login</Text>
        <TextBox/>
        <Text style={HomeStyle.text}>Senha</Text>
        <TextBox/>
        <Button title="Login" color="#000"/>  
     </View>
  );
}

