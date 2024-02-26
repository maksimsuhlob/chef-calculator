import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavLink from "../components/nav-link/nav-link";
import LoginScreen from './loginScreen/loginScreen';

// uncomment for using reactotron for mobile
// if (__DEV__) {
//     import("../ReactotronConfig").then(() => console.log("Reactotron Configured"));
// }

const Stack = createNativeStackNavigator();


export default function App() {

    return (
        <View style={styles.container}>
            <LoginScreen/>
        </View>
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
