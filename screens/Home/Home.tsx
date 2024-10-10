import { View, Text, Button } from 'react-native';
import Icon from '../../components/Icon/Icon';
import TextBox from '../../components/TextBox/TextBox';
import {HomeStyle} from './HomeStyle';

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

