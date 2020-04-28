import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native';
import Index from './src/views/index'
export default function App() {
  return (
    <View style={[styles.container]}>
      <ScrollView style={[styles.scrollViews]}>
        <Image resizeMode={'cover'} style={[styles.imgs]} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587725185406&di=a2efa4c32b231223d1d4a2a014a69a80&imgtype=0&src=http%3A%2F%2Fimg.zwbk.org%2Fbaike%2Fbpic%2F2011%2F05%2F05%2F20110505041115765_5143.jpg' }} ></Image>
        <Image resizeMode={'cover'} style={[styles.imgs]} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587725185406&di=a2efa4c32b231223d1d4a2a014a69a80&imgtype=0&src=http%3A%2F%2Fimg.zwbk.org%2Fbaike%2Fbpic%2F2011%2F05%2F05%2F20110505041115765_5143.jpg' }} ></Image>
        <Image resizeMode={'cover'} style={[styles.imgs]} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587725185406&di=a2efa4c32b231223d1d4a2a014a69a80&imgtype=0&src=http%3A%2F%2Fimg.zwbk.org%2Fbaike%2Fbpic%2F2011%2F05%2F05%2F20110505041115765_5143.jpg' }} ></Image>
      </ScrollView>
      <View style={[styles.TabBar]}>
        <View style={[styles.TabBarItem]}>
          <Image resizeMode={'cover'} style={[styles.TabBarItemImg]} source={require('./src/assets/img/WeChat.png')}></Image>
          <Text style={[styles.TabBarItemText]}>微信</Text>
        </View>
        <View style={[styles.TabBarItem]}>
          <Image resizeMode={'cover'} style={[styles.TabBarItemImg]} source={require('./src/assets/img/Addressbook.png')}></Image>
          <Text style={[styles.TabBarItemText]}>通讯录</Text>
        </View>
        <View style={[styles.TabBarItem]}>
          <Image resizeMode={'cover'} style={[styles.TabBarItemImg]} source={require('./src/assets/img/find.png')}></Image>
          <Text style={[styles.TabBarItemText]}>发现</Text>
        </View>
        <View style={[styles.TabBarItem]}>
          <Image resizeMode={'cover'} style={[styles.TabBarItemImg]} source={require('./src/assets/img/mine.png')}></Image>
          <Text style={[styles.TabBarItemText]}>我</Text>
        </View>
      </View>
    </View>
  )
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width:win.width,
    height:win.height
  },
  scrollViews: {
    marginBottom:83
  },
  imgs: {
    width: win.width,
    height: 400
  },
  phone: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  TabBar: {
    position: "absolute",
    width: win.width,
    bottom: 23,
    backgroundColor: "#e8e8e8",
    height:60,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  TabBarItemImg: {
    width: 25,
    height: 25
  }
})

function Add(props) {
  return (
    <View><Text style={{ color: 'red' }}>{props.name}</Text></View>
  )
}
