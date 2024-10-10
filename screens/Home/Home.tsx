import { View, Text, Button } from 'react-native';
import Icon from '../../components/Icon/Icon';
import TextBox from '../../components/TextBox/TextBox';
import { homestyle } from './HomeStyle';

export default function Home() {
  return ( 
     <View style={homestyle.container}>
        <Icon/>
        <Text style={homestyle.text}>Login</Text>
        <TextBox/>
        <Text>Senha</Text>
        <TextBox/>
        <Button title="Login" color="#000"/> 
     </View>
  );
}

