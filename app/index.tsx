import { Image, StyleSheet, Platform, TextInput, SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [bodyweight, setBodyweight] = useState("");
  const [height, setHeight] = useState("");
  const[bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const calculateBMI = () => {
    const Bodyweight = parseFloat(bodyweight as string);
    const Height = parseFloat(height as string);

    if (!isNaN(Bodyweight) && !isNaN(Height)) {
      const bmi: number = Bodyweight / (Height * Height);
      setBmi(bmi.toFixed(1));

        if(bmi < 18.5){
          setDescription('Underweight, eat more!')
        }else if(bmi>=18.5 && bmi<=24.9){
          setDescription('Normal weight, keep it up!')
        }else if(bmi>=25.0 && bmi<=29.9){
          setDescription('Overweight, need exercise!')
        }else if(bmi>=30.0 && bmi<=34.9){
          setDescription('Obese, exercise more!')
        }else{
          setDescription('Extremly Obese, contact doctor!')
        }

    } else {
      setBmi('');
      setDescription('');
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Kanishk-Chaudhary.jpg')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BMI Calculator</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle">Enter your bodyweight in KG</ThemedText>
        </ThemedView>    
        <TextInput
                style={styles.input}
                placeholder="Enter your body weight here"
                value={bodyweight}
                onChangeText={(text) => setBodyweight(text)}
                keyboardType='numeric'
            />            
            <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle">Enter your height in meter</ThemedText>
        </ThemedView>

        <TextInput
                style={styles.input}
                placeholder="Enter your height here"
                value={height}
                onChangeText={(text) => setHeight(text)}
                keyboardType='numeric'
            />

            
            <TouchableOpacity
            style={styles.button}
            onPress={calculateBMI}>
            <ThemedText style={styles.buttonText}>Calculate</ThemedText>
            </TouchableOpacity>
        <ThemedView style={styles.resultView}>
          <ThemedText style={styles.result}>BMI Score = {bmi}</ThemedText>
          <ThemedText style={styles.result}>{description}</ThemedText>
        </ThemedView>
        <ThemedText style={styles.bottom}>Publish by Kanishk Chaudhary</ThemedText>
    </ParallaxScrollView>
  )
};
const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  input:{
    flex: 1,
        height:20,
        width: 75,
        borderRadius: 5,
        backgroundColor: "#fff",
        textDecorationColor: "#000000",
        textAlign:"center",
        justifyContent: "center",
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
        width: 300,
        textDecorationColor: "#ffffff",
        justifyContent: "center",
    },
    button:{
      marginLeft:"35%",
      marginTop:10,
      height:25,
      width:100,
      borderRadius:5,
      backgroundColor:'#21662b',
      justifyContent:'center',
      alignItems:'center',
    },
    buttonText: {
      fontSize:15,
      color:'#fff',
      fontWeight:'bold',
    },
    resultView:{
      margin:10,
    },
    result:{
      fontSize:20,
      color:'#ffffff',
      fontWeight:'bold',
    },
    bottom:{
      marginTop:130,
      textAlign:"center",
    },
});
