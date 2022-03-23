import { StyleSheet } from 'react-native';

var Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#23242E',
    },

    resultContainer: {
      flex: 4, 
      backgroundColor: '#23242E'
    },

    resultText: {
      fontSize: 50,
      color: '#fff',
      textAlign: 'right',
      padding: 20,
    },
  
    buttonsContainer: {
      flex: 6,
      backgroundColor: '#37414F',
      borderRadius: 30,
    },

    row: {
      flex: 1,
      flexDirection: 'row'
    },
});

export default Styles;