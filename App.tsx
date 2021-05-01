import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import logo from './logo.jpg';
import Constants from 'expo-constants';

export default function App() {
  return (
    <>
    <StatusBar style="auto" backgroundColor="powderblue"/>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
      <Image source={logo} style={styles.imageComp}/>
      
      <View style={styles.formContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.styleLabel}>
            Senha
          </Text>

          <TextInput placeholder="Digite a sua Senha" secureTextEntry style={styles.inputStyle}/>

        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.styleLabel}>
            Login
          </Text>
          <TextInput placeholder="Digite o seu Email" keyboardType="email-address" style={styles.inputStyle}/>

        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
           LOGIN
          </Text>
        </TouchableOpacity>


      </View>


      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: Constants.statusBarHeight,
    
   
  },
  imageComp:{
    width: '100%',
    height: 320,
    resizeMode: 'cover',


  },
  formContainer:{
    width: '85%',
    marginTop:40,
   

  },
  sectionContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:6,

  },
  inputStyle:{
    flex:1,
    borderColor: '#3c6593',
    borderWidth: 2,
    marginLeft: 10,
    paddingVertical:2,
    paddingHorizontal:6

  },
  styleLabel:{
    width: 40,
    fontWeight: 'bold',
    

  },
  button:{
    backgroundColor:'#4895ec',
    marginTop: 4,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:2,

  },
  textButton:{
    color: "#fff",
    fontWeight: 'bold',

  }
});
