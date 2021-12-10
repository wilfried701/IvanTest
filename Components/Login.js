import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, Button,Image, } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import Icon from "../assets/images/preview.png";
import FlatButton from './FlatButton';
import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
export default Login  = ()=> {
  const navigation = useNavigation ();
        return(
          <View style={styles.container}>
            <View style = {styles.header}>
              <View style = {styles.icon_container}>
                <Image source={Icon} style={styles.icon}/>
              </View>
              <Text style = {styles.header_text}>Hello Again!</Text>
              <Text style = {styles.header_text}>Welcome</Text>
              <Text style = {styles.header_text}>Back</Text>
            </View>
            <View style={styles.body}>
              <TextInput style={styles.email_textinput} placeholder="Email Address"/>
              <TextInput style={styles.password_textinput}placeholder="Password"/>
              <FlatButton style = {styles.signup_button} text="Sign In" onPress={()=>navigation.navigate("Search")} />
            </View>
            <View style={styles.footer}>
              <Text>You don't have an account ?</Text>
              <View >
                <Button title="Sign Up" onPress={()=>navigation.navigate("SignUp")}/>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        );
    }

// export const Signin = ({navigation})=>{
//   return(
//     <ScreenContainer>
//       <Text>Signin Screen</Text>
//       <Button title="Sign In" onPress={()=>alert("Vous avez cliqué")} />
//       <Button title="Create Account" onPress={()=>navigation.push} />
//     </ScreenContainer>
//   );
// };


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
  body:{
    marginTop:20,
  },
  email_textinput:{
    borderWidth:1,
    padding: 10,
    margin:20,
    marginBottom:0,
    borderRadius:10,
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




