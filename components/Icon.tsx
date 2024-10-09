import { Text, View, StyleSheet, Image } from 'react-native';
 
export default function Icon() {
  return (
<View style={styles.container}>      
<Image style={styles.logo} source={require('../assets/snack-icon.png')} />
<Text style={styles.paragraph}>
        MEU APP
</Text>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    backgroundColor: '#ccc',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});