import {StyleSheet,TextInput} from 'react-native';


export default function TextBox() {
  return (
     <TextInput style={styles.textbox}/>
  );
}

const styles = StyleSheet.create({
  textbox: {
    width:'80%',
    backgroundColor:'#ffff99',
    paddingHorizontal: 16,
    paddingVertical:6,
    fontSize:12,
    borderStyle:'solid',
    borderWidth:2,
    borderColor:'#000',
    borderRadius:100
}
});