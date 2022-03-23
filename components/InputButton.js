import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function InputButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292B37',
        borderRadius: 10,
        margin: 15,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
});