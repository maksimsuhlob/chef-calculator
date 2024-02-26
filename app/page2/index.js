import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


const handleToLogIn = async () => {
    router.navigate('/');
  };


export default function Page2() {
    return (
        <View style={styles.container}>
            <Text>No dude, no guest entry for you. Go to log in</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={handleToLogIn}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
            <StatusBar style="auto" />
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
    loginBtn: {
        width: 200,
        backgroundColor: '#EE99C2',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
});
