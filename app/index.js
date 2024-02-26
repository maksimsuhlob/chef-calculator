import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import NavLink from "../components/nav-link/nav-link";
import edamamService from "../services/edamam/edamam";

// uncomment for using reactotron for mobile
if (__DEV__) {
    import("../ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
export default function App() {

    return (
        <View style={styles.container}>
            <Text>page 1</Text>
            <NavLink href={'/page2'} title={'page2'}/>
            <StatusBar style="auto"/>
            <Button
                title={'getflour'}
                onPress={()=>edamamService.getIngredient('flour')}
            />
            <Button
                title={'autocomplete'}
                onPress={()=>edamamService.getAutoComplete('pep')}
            />
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
