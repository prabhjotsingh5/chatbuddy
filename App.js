import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login/Login';
import Signup_EnterEmail from './src/screens/auth/Signup/Signup_EnterEmail';
import Signup_EnterVerificationCode from './src/screens/auth/Signup/Signup_EnterVerificationCode';
import Signup_ChoosePassword from './src/screens/auth/Signup/Signup_ChoosePassword';
import Signup_ChooseUsername from './src/screens/auth/Signup/Signup_ChooseUsername';
import Signup_AccountCreated from './src/screens/auth/Signup/Signup_AccountCreated';
import ForgotPassword_EnterEmail from './src/screens/auth/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './src/screens/auth/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPassword_ChoosePassword from './src/screens/auth/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecovered from './src/screens/auth/ForgotPassword/ForgotPassword_AccountRecovered';
import Home from './src/screens/home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation:'slide_from_right'

      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerificationCode" component={Signup_EnterVerificationCode} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerificationCode" component={
          ForgotPassword_EnterVerificationCode
        } />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />

        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});