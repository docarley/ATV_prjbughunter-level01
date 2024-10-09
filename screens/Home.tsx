import { View, Text, StyleSheet } from 'react-native';
import Icon from './../components/Icon';
import LoginButton from '../components/LoginButton';

// or any files within the Snack
import TextBox from './../components/TextBox';

export default function Home() {
  return ( 
     <View style={styles.container}>
        <Icon/>
        <Text style={styles.text}>Login</Text>
        <TextBox/>
        <Text style={styles.text}>Senha</Text>
        <TextBox/>
        <LoginButton/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:16,
    paddingVertical:48,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee',
},
text: {
    fontSize:16,
},
});