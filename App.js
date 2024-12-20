import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Platform,
  TextInput,
  Pressable
} from "react-native";

export default function App() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState({})

  function handleValidation(){
    let errors = {}
    if(!email) errors.email = 'email is required';
    if(!password) errors.password = 'password is required';

    setError(errors)

    return Object.keys(errors).length == 0;
  }

  function handleSubmit(){
    if(handleValidation()){
      console.log('submited',email)
      setError({})
      setEmail('')
      setPassword('')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor="#0D3A2D"
        barStyle="light-content"
      />
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require("./assets/people.jpg")}
        />
        <View style={styles.overlay}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <Text style={styles.heading}>Welcome Back!</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS == "ios" ? 100 : 0}
        style={styles.formContainer}
      >
        <Text style={styles.label}>Email</Text>
        <TextInput 
          placeholder="e.g johndoe@gmail.com"
          style={styles.input} 
          value={email}
          onChangeText={setEmail}
          />
          {error.email?<Text style={styles.error}>{error.email}</Text>:null}

        <Text style={styles.label}>password</Text>
        <TextInput 
          placeholder="enter password"
          style={styles.input} 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          />
          {error.password?<Text style={styles.error}>{error.password}</Text>:null}

          <Pressable 
            style={styles.loginButton}
            onPress={handleSubmit}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>

          <Pressable style={styles.signupButton}>
            <Text style={styles.text}> Don't have an account?</Text>
            <Text style={styles.signupText}>Sign up</Text>
          </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#0D3A2D',
  },
  banner: {
    height: 300,
    width: "100%",
    position: "relative",
    borderRadiusBottomLeft: 50,
    backgroundColor: "white"
  },
  bannerImage: {
    height: "100%",
    width: "100%",
    borderBottomRightRadius: 50
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(13,58,45,0.9)",
    padding: 20,
    borderBottomRightRadius: 50
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 80
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  formContainer:{
    borderTopLeftRadius: 50,
    backgroundColor: "white",
    padding: 20,
  },
  label:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginTop:5
  },
  loginButton:{
    backgroundColor:'#0D3A2D',
    marginTop:10,
    padding: 10,
    borderRadius: 5
  },
  loginButtonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  },
  signupButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10
  },
  text:{
    fontWeight: 'bold',
    textAlign: 'center'
  },
  signupText:{
    fontWeight:'bold',
    color: '#0D3A2D'
  },
  error:{
    color: 'red',
    marginTop: 5
  }
});
