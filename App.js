import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';
import Index from './src/views/index'
export default function App() {
  return (
    <ScrollView>
      <Index></Index>
      <Image resizeMode={'cover'} style={[styles.imgs]} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587725185406&di=a2efa4c32b231223d1d4a2a014a69a80&imgtype=0&src=http%3A%2F%2Fimg.zwbk.org%2Fbaike%2Fbpic%2F2011%2F05%2F05%2F20110505041115765_5143.jpg' }} ></Image>
      <TextInput style={[styles.phone]} placeholder="这是第一"></TextInput>
      <View style={[styles.slflex]}>
        <Text>122</Text>
        <Text>.fff</Text>
      </View>
    </ScrollView>
  )
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  imgs: {
    width: win.width,
    height: 400
  },
  phone: {
    paddingLeft: 15,
    paddingRight: 15,
    height:40,
    borderColor: 'red',
    borderWidth: 1
  },
  slflex: {
    flexDirection:"row",
    justifyContent: "space-between",
  }
})

function Add(props) {
  return (
    <View><Text style={{ color: 'red' }}>{props.name}</Text></View>
  )
}
