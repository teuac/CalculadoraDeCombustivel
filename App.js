import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import logo from './assets/bombaDeCombustivel.png';

export default function App() {

    const [alcool, setAlcool] = useState('');
    const [gasolina, setGsolina] = useState('');
    const [melhor_opcao, setMelhorOpcao] = useState('');


    function calculaMelhorOpcao() {
        if(alcool > 0 && gasolina > 0){
            if((parseFloat(alcool) / parseFloat(gasolina)) <= 0.7){
                setMelhorOpcao("Alcool é a melhor opção")
            }
            else{
                setMelhorOpcao("Gasolina é a melhor opção")
            }
        }else{
            setMelhorOpcao('Informe os valores')
        }
    }
  return (
    <View style={styles.container}>

        <Image style={styles.img} source={logo} />

        <View>
            <Text style={{fontSize: 30, color: 'white', paddingBottom: 30}}>Qual a melhor opção ?</Text>
        </View>

        <View style={styles.inputs}>
            <Text style={styles.inputTexts}>Álcool(preço por litro)</Text>
            <TextInput
                placeholder='Digite o valor do álcool'
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setAlcool}
            />

            <Text style={styles.inputTexts}>Gasolina(preço por litro)</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o valor da gasolina'
                keyboardType={'numeric'}
                onChangeText={setGsolina}
            />

            <Text style={styles.resultadoFormat}>{melhor_opcao ? `${melhor_opcao}` : ''}</Text>

        </View>

        <Button
            color="#FFD700"
            title='calcular'
            onPress={calculaMelhorOpcao}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
    justifyContent: 'center',


  },
    resultadoFormat: {
      fontSize: 20,
        color: 'green',

    },
    img:{
      width: 200,
        height: 200,
    },
 inputs:{
      justifyContent: 'center',
      alignItems: 'center',
     paddingBottom: 30,
     marginBottom: 10,
  },
    input: {
      height: 40,
      width: 250,
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
    },
    inputTexts:{
        fontSize: 20,
        color: 'white',
        paddingBottom: 10,
    },
});
