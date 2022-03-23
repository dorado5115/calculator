import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { InputButton } from "./components";
import Styles from './styles/Styles.js';

export default function App() {

    const inputButtons = [
        ['AC', '', '', ''],
        [1, 2, 3, '/'],
        [4, 5, 6, '*'],
        [7, 8, 9, '-'],
        [0, '.', '=', '+']
    ];

    const [operation, setOperation] = useState('0');

    const handleClick = (value) => {
        if (value === '=') {
            setOperation(eval(operation));
        } else if (value === 'AC') {
            setOperation('0');
        } else {
            if (operation === '0') {
                setOperation(value);
            } else {
                setOperation(`${operation}${value}`);
            }
        }
    };

    return (
        <>
            <StatusBar style="auto" />
            <View style={Styles.container}>
                <View style={Styles.resultContainer}>
                    <Text style={Styles.resultText}>{operation}</Text>
                </View>
                <View style={Styles.buttonsContainer}>
                    {inputButtons.map((row, idx) => {
                        return (
                            <View key={idx} style={Styles.row}>
                                {row.map((buttonVal, idx) => {
                                    return (
                                        <InputButton
                                            key={idx}
                                            title={buttonVal}
                                            onPress={() => handleClick(buttonVal)}
                                        />
                                    )
                                })}
                            </View>
                        )
                    })}   
                </View>
            </View>
        </>
    );
}