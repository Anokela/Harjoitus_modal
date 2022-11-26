import React, { useState } from 'react';
import { Text, View, Pressable, Modal } from 'react-native';
import StyleSheet from './Styles.js'

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function close() {
    setModalVisible(false);
  }

  return (
    <View style={[StyleSheet.container, {alignItems: 'flex-start'}]}>
      <Text>Testing</Text>
      <Modal
      visible={modalVisible}
      onRequestClose={close}
      >
        <View style={StyleSheet.modal}>
          <Text>This is modal...</Text>
          <Pressable
          onPress={() => {
            setModalVisible(false);
          }}>
            <Text style={StyleSheet.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => {
        setModalVisible(true);
      }}>
        <Text>Show Modal message</Text>
      </Pressable>
    </View>
  );
}