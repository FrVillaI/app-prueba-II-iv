import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function InicioScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ISAAC VILLACIS</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://www.stovemagazine.com/wp-content/uploads/2020/11/82135cf7f5f8994ec7fb3162022d5e79.jpg' }}
            />
            <Button title='Login' onPress={() => navigation.navigate('Login')} color={'#000'}/>
            <Button title='Registro' onPress={() => navigation.navigate('Registro')} color={'#000'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b8b8b8',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 150,
        marginBottom: 10,
    },
});
