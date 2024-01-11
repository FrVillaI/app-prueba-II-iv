import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { guardarInfUser, registroUser } from '../componets/FireBase';


export default function PerfilScreen({ navigation }: any) {
  const [correoE, setcorreoE] = useState('');
  const [nick, setnick] = useState('');
  const [edad, setedad] = useState('');
  const [contrasenia, setcontrasenia] = useState('');
  const [nombre, setnombre] = useState('');
  const [camposLimpios, setCamposLimpios] = useState(false);

  const limpiarCampos = () => {
    setcorreoE('');
    setcontrasenia('');
    setnick('');
    setedad('');
    setCamposLimpios(true);
  };

  const guadarUsuario = () => {
    registroUser(correoE, contrasenia, { navigation });
    guardarInfUser(nick, correoE, edad, nombre);
    limpiarCampos();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar email"
        keyboardType="email-address"
        onChangeText={(texto) => setcorreoE(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar contraseña"
        secureTextEntry
        onChangeText={(texto) => setcontrasenia(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar su nick"
        onChangeText={(texto) => setnick(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar su Nombre"
        secureTextEntry
        onChangeText={(texto) => setnombre(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar su edad"
        keyboardType="numeric"
        onChangeText={(texto) => setedad(texto)}
      />

      <Button title='Registrarse' onPress={() => guadarUsuario()} color={'#000'} />
      <Text style={styles.registerText}>
        ¿ Ya tienes una cuenta?
      </Text>
      <Text style={styles.registerText} onPress={() => navigation.navigate('Login')}>
        // Inicia Secion aquí //
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8b8b8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
    color: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
  },
  registerText: {
    marginTop: 16,
    fontSize: 16,
  },
});
