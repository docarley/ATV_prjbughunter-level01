import { View, Text, Button} from 'react-native';
import Icon from '../../components/Icon/Icon';
import { styles } from './HomeStyle';


import TextBox from '../../components/TextBox/TextBox';

export default function Home() {
  return ( 
     <View style={styles.container}>
        <Icon/>
        <Text style={styles.text}>Login</Text>
        <TextBox/>
        <Text style={styles.text}>Senha</Text>
        <TextBox/>
        <Button title="Login" color="#000"/>
     </View>
  );
}

