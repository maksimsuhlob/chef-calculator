import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { NativeModules } from 'react-native';

const hostname = NativeModules.SourceCode.scriptURL
    .split('://')[1] // Remove the scheme
    .split('/')[0] // Remove the path
    .split(':')[0]; // Remove the port

Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: hostname}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
