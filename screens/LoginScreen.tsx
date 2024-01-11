import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from '../componets/FireBase';

export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [camposLimpios, setCamposLimpios] = useState(false);

  const limpiarCampos = () => {
    setCorreo('');
    setContrasenia('');
    setCamposLimpios(true);
  };

  const loginUsuario = () => {
    loginUser(correo, contrasenia,{navigation});
    limpiarCampos();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar email"
        keyboardType="email-address"
        placeholderTextColor="black"
        onChangeText={(texto) => setCorreo(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresar contraseña"
        secureTextEntry
        placeholderTextColor="black"
        onChangeText={(texto) => setContrasenia(texto)}
      />
      <Button title="Ingresar" onPress={() => loginUsuario()} color={'#000'}/>

      <Text style={styles.registerText} onPress={() => navigation.navigate('Registro')}>
        // Regístrate aquí //
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8b8b8',
    paddingHorizontal: 20,
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
  registerText: {
    marginTop: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    color: 'black',
  },
})