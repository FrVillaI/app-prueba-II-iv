import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { onValue, ref } from 'firebase/database';
import { db } from '../config/Config';
import { updateInUsario } from '../componets/FireBase';

export default function PerfilScreen() {
  const [nombre, setNombre] = useState('');
  const [nick, setNick] = useState('');
  const [edad, setEdad] = useState('');
  const [datos, setDatos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const buscarDatos = () => {
    // Buscar datos correspondientes al nick ingresado
    const usuarioEncontrado = datos.find((item) => item.nick === nick);

    if (usuarioEncontrado) {
      setNombre(usuarioEncontrado.nombre);
      setEdad(usuarioEncontrado.edad);
      // Otros campos que desees mostrar
    }

    console.log(da)
  };

  const actualizarUsuario = () => {
    // Actualizar usuario con los nuevos datos ingresados
    updateInUsario(nick, edad, nombre);
    // Cerrar la ventana modal
    setModalVisible(false);
  };

  useEffect(() => {
    const starCountRef = ref(db, 'usuarios/');
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArr:any = Object.keys(data).map((key) => ({ key, ...data[key] }));
          setDatos(dataArr);
        } else {
          setDatos([]);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Nick"
        onChangeText={(texto) => setNick(texto)}
      />
      <Button title='Ver Datos' onPress={buscarDatos} />
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <Text style={styles.subtitle}>{nick}</Text>
              <Text style={styles.info}>Información</Text>
              <Text style={styles.infoDetail}>Nombre: {item.nombre}</Text>
              <Text style={styles.infoDetail}>Edad: {item.edad}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title='Editar' color={'#9dd025'} onPress={() => setModalVisible(true)} />

      {/* Ventana modal para actualizar datos */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Actualizar Datos</Text>
          <TextInput 
            style={styles.input}
            placeholder="Nuevo Nombre"
            value={nombre}
            onChangeText={(texto) => setNombre(texto)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva Edad"
            value={edad}
            onChangeText={(texto) => setEdad(texto)}
          />
          <Button title='Actualizar' onPress={actualizarUsuario} />
          <Button title='Cancelar' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e371',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoDetail: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
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
});