import * as React from 'react';
import { Button, View,StyleSheet,Image,Icon,Text,TextInput,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Components/Search';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import FlatButton from '../Components/FlatButton';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Notifications"
//         onPress={() => navigation.navigate('Notifications')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
// function Loginn({ navigation }) {
//     return (
//         <View style={styles.container}>
//         <View style = {styles.header}>
//           <View style = {styles.icon_container}>
//             <Image source={Icon} style={styles.icon}/>
//           </View>
//           <Text style = {styles.header_text}>Hello Again!</Text>
//           <Text style = {styles.header_text}>Welcome</Text>
//           <Text style = {styles.header_text}>Back</Text>
//         </View>
//         <View style={styles.body}>
//           <TextInput style={styles.email_textinput} placeholder="Email Address"/>
//           <TextInput style={styles.password_textinput}placeholder="Password"/>
//           <FlatButton style = {styles.signup_button} text="Sign In" />
//         </View>
//         <View style={styles.footer}>
//           <Text>You don't have an account ?</Text>
//           <View >
//             <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
//           </View>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Search" component={Search} />
      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
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

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
