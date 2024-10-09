import { Text, View, StyleSheet, Image } from 'react-native';

export default function Icon() {
  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Ícone do aplicativo">
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
    marginVertical: 16,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    resizeMode: 'contain',
  },
});
