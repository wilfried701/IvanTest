import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,Image, } from 'react-native';
import Icon from "../assets/images/preview.png";
import Profil from "../assets/images/profil.png";
import FlatButton from './FlatButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

class SignUp extends React.Component{
    render(){
        return(
          <View style={styles.container}>
            <View style = {styles.header}>
              <View style = {styles.icon_container}>
                <Image source={Icon} style={styles.icon}/>
              </View>
              <Text style = {styles.header_text}>Hello</Text>
              <Text style = {styles.header_text}>SignUp to</Text>
              <Text style = {styles.header_text}>get started</Text>
              <View style = {styles.profil_container}>
                <Image source={Profil} style={styles.profil}/>
              </View>
            </View>
            <View style={styles.body}>
              <TextInput style={styles.name_textinput} placeholder="Name"/>
              <TextInput style={styles.email_textinput}placeholder="Email Address"/>
              <TextInput style={styles.password_textinput}placeholder="PassWord"/>
              <FlatButton onPress={()=> navigation.navigate("Search")} style = {styles.signup_button} text="Sign Up" />
            </View>
            <View style={styles.footer}>
              <Text>Already have an account ?</Text>
              <Text>Sing In</Text>
            </View>
            <StatusBar style="auto" />
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon_container:{
    marginTop:10,
    marginBottom:20,
    height:60,
    width:80,
    backgroundColor:"#d3e2eb",
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    
  },
  icon:{
    width:20,
    height:20,
    margin:20
  },
  header:{
    marginTop:10,
  },
  header_text:{
    color:"#01579b",
    fontSize:35,
    marginLeft:20,
  },
  profil:{
    width:80,
    height:80,
    margin:7
  },
  profil_container:{
    margin:20,
    marginBottom:0,
    height:80,
    width:80,
    backgroundColor:"#01579b",
    borderRadius:10,
    
  },
  name_textinput:{
    borderWidth:1,
    padding: 10,
    margin:20,
    marginBottom:0,
    borderRadius:10,
    borderColor:"#8b9297"
    
  },
  email_textinput:{
    borderWidth:1,
    padding: 10,
    margin:20,
    borderRadius:10,
    marginBottom:0,
    borderColor:"#8b9297"
    
  },
  password_textinput:{
    borderWidth:1,
    padding: 10,
    margin:20,
    borderRadius:10,
    borderColor:"#8b9297"
  },
  footer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:30,
  }
});




export default SignUp