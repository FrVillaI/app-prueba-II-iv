import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { cerrarSesion } from '../componets/FireBase';

export default function WelcomeScreen({ navigation }: any) {

  const cerrarS = () => {
    cerrarSesion({navigation});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.message}>¡Bienvenido a la aplicación! Esperamos que disfrutes tu experiencia.</Text>
      <Image
                style={styles.image}
                source={{ uri: 'https://www.arquitecturaydiseno.es/medio/2023/05/31/creacion-de-adan-en-la-capilla-sixtina-miguel-angel-buonarroti-1508-1512_5a516deb_230531142003_2000x1141.jpg' }}
            />
      <Button title='Log Out' color={'#e23636'} onPress={()=>cerrarS()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 10,
},
});