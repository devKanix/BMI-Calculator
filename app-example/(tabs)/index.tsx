import { Image, StyleSheet, Platform, TextInput, SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [bodyweight, setBodyweight] = useState("");
  const [height, setHeight] = useState("");
  const[bmi, setBmi] = useState("");
  const [description, setDescription] = useState('');

  const calculateBMI = () => {
    const bmi = bodyweight / ((height/100)*(height/100));
    setBmi(bmi.toFixed(1))

    if(bmi < 18.5){
      setDescription('Underweight, eat more!')
    }else if(bmi>=18.5 && bmi<=24.5){
      setDescription('Normal weight, keep it up!')
    }else{
      setDescription('Overweight, exercise more!')
    }
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Kanishk-Chaudhary.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BMI Calculator</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle">Enter your bodyweight in KG</ThemedText>
        <SafeAreaView >
        <TextInput
        style={styles.input}
                placeholder="Enter your body weight here"
                value={bodyweight}
                onChangeText={(text) => setBodyweight(text)}
                keyboardType='numeric'
            />
            </SafeAreaView>
            </ThemedView>
            <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle">Enter your height in meter</ThemedText>

        <TextInput
                style={styles.input}
                placeholder="Enter your height here"
                value={height}
                onChangeText={(text) => setHeight(text)}
                keyboardType='numeric'
            />

            </ThemedView>
            <TouchableOpacity
            style={styles.button}
            onPress={calculateBMI}>
            <ThemedText style={styles.buttonText}>Calculate</ThemedText>
            </TouchableOpacity>
        <ThemedText type="subtitle">Your BMI Score is</ThemedText>
        <view style={styles.resultView}>
          <ThemedText style={styles.result}>{bmi}</ThemedText>
          <ThemedText style={styles.result}>{description}</ThemedText>
        </view>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  input: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  inputContainer: {
        flex: 1,
        height:20,
        width: 150,
        borderRadius: 5,
        backgroundColor: "#fff",
        textDecorationColor: "#000",
        justifyContent: "center",
    },
    button:{
      height:20,
      width:10,
      borderRadius:5,
      backgroundColor:'#000',
      justifyContent:'center',
      alignItems:'center',
    },
    buttonText: {
      fontSize:15,
      color:'#fff',
      fontWeight:'bold',
    },
    resultView:{
      margin:15,
    },
    result:{
      fontSize:30,
      color:'#2c',
    },
});
